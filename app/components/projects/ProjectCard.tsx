const ProjectCard: React.FC<{
  image: string;
  leftHeader: string;
  rightHeader: string;
  link: string;
}> = ({ image, leftHeader, rightHeader, link }) => (
  <div className="flex flex-col h-full">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-0 overflow-hidden flex flex-col group cursor-pointer h-full"
      tabIndex={0}
    >
      <div className="overflow-hidden z-20">
        <img
          src={image}
          alt={leftHeader}
          className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-110 pointer-events-none"
          draggable={false}
        />
      </div>
      
    </a>
    <div className="flex justify-between items-center py-3  bg-white bg-opacity-90">
        <h3 className="text-xs sm:text-sm uppercase text-gray-800">{leftHeader}</h3>
        <span className="text-xs sm:text-sm text-gray-500">{rightHeader}</span>
    </div>
  </div>
);

export default ProjectCard;