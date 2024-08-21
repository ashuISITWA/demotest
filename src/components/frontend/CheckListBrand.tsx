interface Item {
  imageUrl: string;  // Correct property name
  text: string;
  id: string;  // Missing property
  name: string;  // Missing property
  value: string;  // Missing property
}


// Define the props interface for CheckListBrand
interface CheckListBrandProps {
  items: Item[];
}

const CheckListBrand: React.FC<CheckListBrandProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-1 rounded-lg bg-[#f3f3f3] px-[10px] dark:bg-[#212224] dark:text-white"
        >
          <input
            type="checkbox"
            id={item.id}
            name={item.name}
            value={item.value}
            className="dark:accent-[#2d2d2f]"
          />
          <label
            htmlFor={item.id}
            className="flex w-full cursor-pointer gap-1 py-[6px]"
          >
            <div className="inline-block h-[20px] w-[20px] rounded-full overflow-hidden">
              <img src={item.imageUrl} alt={item.text} className="w-full" />
            </div>
            <span className="text-[14px]">{item.text}</span>
          </label>
        </div>
      ))}
    </>
  );
}
// In CheckListBrand.tsx
export default CheckListBrand;
