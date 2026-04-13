import { ServiceCardProps } from '../lib/types';
export const ServiceCard = ({ imageSrc, title }: ServiceCardProps) => {
  return (
    <div className='bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-2 py-4 aspect-square'>
      <div className='h-12 w-full flex items-center justify-center'>
        <img src={imageSrc} alt={title} className='max-h-full object-contain' />
      </div>
      <div className='text-sm text-center'>
          {title}
      </div>
    </div>
  );
}