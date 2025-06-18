
import React, { useState } from 'react';
import { MapPin, Filter, X, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  selectedFilters: {
    location: string;
    type: string;
    services: string[];
    sortBy: string;
  };
  onFiltersChange: (filters: any) => void;
}

const FilterBar = ({ selectedFilters, onFiltersChange }: FilterBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const locationOptions = [
    "Tous les arrondissements",
    "1er arrondissement",
    "6ème arrondissement", 
    "7ème arrondissement",
    "11ème arrondissement",
    "15ème arrondissement"
  ];

  const typeOptions = [
    "Tous les types",
    "Restaurant",
    "Café", 
    "Bar à Vin",
    "Brasserie",
    "Food Truck"
  ];

  const serviceOptions = [
    "Bio",
    "Vegan",
    "Livraison",
    "Terrasse",
    "Wifi",
    "Parking"
  ];

  const sortOptions = [
    { value: "popularite", label: "Popularité" },
    { value: "proximite", label: "Proximité" },
    { value: "nouveaux", label: "Nouveaux" },
    { value: "note", label: "Mieux notés" }
  ];

  const clearFilter = (filterType: string, value?: string) => {
    console.log(`Clearing filter: ${filterType}`, value);
    const newFilters = { ...selectedFilters };
    
    if (filterType === 'services') {
      if (value) {
        newFilters.services = newFilters.services.filter(s => s !== value);
      } else {
        newFilters.services = [];
      }
    } else if (filterType === 'location') {
      newFilters.location = '';
    } else if (filterType === 'type') {
      newFilters.type = '';
    } else if (filterType === 'sortBy') {
      newFilters.sortBy = 'popularite';
    }
    
    onFiltersChange(newFilters);
  };

  const updateFilter = (filterType: string, value: string) => {
    console.log(`Updating filter: ${filterType} = ${value}`);
    const newFilters = { ...selectedFilters };
    
    if (filterType === 'services') {
      if (newFilters.services.includes(value)) {
        newFilters.services = newFilters.services.filter(s => s !== value);
      } else {
        newFilters.services = [...newFilters.services, value];
      }
    } else if (filterType === 'location') {
      newFilters.location = value;
    } else if (filterType === 'type') {
      newFilters.type = value;
    } else if (filterType === 'sortBy') {
      newFilters.sortBy = value;
    }
    
    onFiltersChange(newFilters);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          {/* Filter Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full md:w-auto bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-gray-100"
          >
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filtres</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {/* Filter Content - Dropdown */}
          {isExpanded && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                {/* Location Filter */}
                <div className="relative">
                  <select 
                    value={selectedFilters.location}
                    onChange={(e) => updateFilter('location', e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    {locationOptions.map(option => (
                      <option key={option} value={option === "Tous les arrondissements" ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <MapPin className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Type Filter */}
                <select 
                  value={selectedFilters.type}
                  onChange={(e) => updateFilter('type', e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {typeOptions.map(option => (
                    <option key={option} value={option === "Tous les types" ? "" : option}>
                      {option}
                    </option>
                  ))}
                </select>

                {/* Sort Filter */}
                <select 
                  value={selectedFilters.sortBy}
                  onChange={(e) => updateFilter('sortBy', e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {serviceOptions.map(service => (
                  <button
                    key={service}
                    onClick={() => updateFilter('services', service)}
                    className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                      selectedFilters.services.includes(service)
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>

              {/* Active Filters */}
              {(selectedFilters.location || selectedFilters.type || selectedFilters.services.length > 0) && (
                <div className="flex flex-wrap gap-2">
                  {selectedFilters.location && (
                    <div className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      <span>{selectedFilters.location}</span>
                      <button 
                        onClick={() => clearFilter('location')}
                        className="ml-2 hover:text-purple-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  {selectedFilters.type && (
                    <div className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      <span>{selectedFilters.type}</span>
                      <button 
                        onClick={() => clearFilter('type')}
                        className="ml-2 hover:text-purple-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                  {selectedFilters.services.map(service => (
                    <div key={service} className="flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      <span>{service}</span>
                      <button 
                        onClick={() => clearFilter('services', service)}
                        className="ml-2 hover:text-purple-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
