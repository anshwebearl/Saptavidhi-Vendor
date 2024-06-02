import MyCatalogCard from "./MyCatalogCard";
import image9 from '../../assets/images/image9.jpeg';

function MyCatalog() {
    const venues = [
        {
            src: image9,
            title: 'The Beginning',
            subtitle: 'Banquet halls, Lawns / Farm House',
            location: 'Vashi, Navi Mumbai',
            detailsArray: ['100-2000 Pax', '152 Rooms'],
            priceVeg: 2000,
            priceNonVeg: 2000,
        },
        {
            src: image9,
            title: 'The Beginning',
            subtitle: 'Banquet halls, Lawns / Farm House',
            location: 'Vashi, Navi Mumbai',
            detailsArray: ['100-2000 Pax', '152 Rooms'],
            priceVeg: 2000,
            priceNonVeg: 2000,
        },
        {
            src: image9,
            title: 'The Beginning',
            subtitle: 'Banquet halls, Lawns / Farm House',
            location: 'Vashi, Navi Mumbai',
            detailsArray: ['100-2000 Pax', '152 Rooms'],
            priceVeg: 2000,
            priceNonVeg: 2000,
        },
        {
            src: image9,
            title: 'The Beginning',
            subtitle: 'Banquet halls, Lawns / Farm House',
            location: 'Vashi, Navi Mumbai',
            detailsArray: ['100-2000 Pax', '152 Rooms'],
            priceVeg: 2000,
            priceNonVeg: 2000,
        },
        {
            src: image9,
            title: 'The Beginning',
            subtitle: 'Banquet halls, Lawns / Farm House',
            location: 'Vashi, Navi Mumbai',
            detailsArray: ['100-2000 Pax', '152 Rooms'],
            priceVeg: 2000,
            priceNonVeg: 2000,
        },
        {
            src: image9,
            title: 'The Beginning',
            subtitle: 'Banquet halls, Lawns / Farm House',
            location: 'Vashi, Navi Mumbai',
            detailsArray: ['100-2000 Pax', '152 Rooms'],
            priceVeg: 2000,
            priceNonVeg: 2000,
        },
        
    ];

    return (
        // <div className="w-[968px]">


            <div className="p-4 border-[1px] border-[#00000033] rounded-[20px] w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-md md:text-2xl font-semibold">MyCatalog</h2>
                    <div className="font-[500] text-sm md:text-lg bg-gradient-to-r from-[#FD070780] to-[#5C034080] text-white px-2 py-1 md:px-4 md:py-2 rounded-2xl">Add Catalog</div>
                </div>
                <hr className="mb-4" />
                <div className="flex flex-wrap gap-5 justify-center w-full">
                    {venues.map((venue, index) => (
                        <MyCatalogCard key={index} {...venue} />
                    ))}
                </div>
            </div>


        // </div>
    );
}

export default MyCatalog;
