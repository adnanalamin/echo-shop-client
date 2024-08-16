const ProductCard = ({data}) => {
    const renderStars = (rating) => {
        const totalStars = 5; // Total number of stars
        let stars = [];
    
        for (let i = 0; i < totalStars; i++) {
          if (i < Math.floor(rating)) {
            // Full star
            stars.push(
              <svg
                key={i}
                className="w-4 fill-[#facc15]" // Filled star color
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            );
          } else if (i < rating && rating % 1 !== 0) {
            // Half star
            stars.push(
              <svg
                key={i}
                className="w-4 fill-[#facc15]" // Half-filled star color
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                <path d="M7 0H3.4687L4.5313 3.60213H7Z" fill="#CED5D8" /> {/* Half-empty color */}
              </svg>
            );
          } else {
            // Empty star
            stars.push(
              <svg
                key={i}
                className="w-4 fill-[#CED5D8]" // Empty star color
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            );
          }
        }
    
        return stars;
      };
    
    
  return (
    <div>
      <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
        <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src={data.productImage}
            alt="product1"
            className="h-full w-full object-fill"
          />
        </div>

        <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
          <div className="text-center">
            <h3 className="text-base font-bold text-gray-800">
              {data.productName}
            </h3>
            <h4 className="text-lg text-blue-600 font-bold mt-2">${data.price}</h4>
          </div>

          <div className="flex justify-center space-x-1 mt-4">
          {renderStars(data.ratings)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
