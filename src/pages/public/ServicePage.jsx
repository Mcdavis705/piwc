import React, { useState } from 'react';
import ServiceSearchControls from '../../components/public/services/ServiceSearchControl.jsx';
import ServiceGrid from '../../components/public/services/ServiceGrid.jsx';

function ServicesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <div className="pt-24 min-h-screen ">
            {/* Header and Controls */}
            <ServiceSearchControls 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
            />

            {/* Grid (handles fetching, filtering, and display) */}
            <ServiceGrid searchTerm={searchTerm} />
        </div>
    );
}

export default ServicesPage;
