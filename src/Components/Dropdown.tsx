import './Dropdown.scss'

type DropdownProps = {
    publication: any;
    setPublication: any;
    options: string[];
};

export const NativeDropdown = ({ publication, setPublication, options }: DropdownProps) => {

  const handleChange = (event: any) => {
    setPublication(event.target.value);
  };

  return (
    <div className="dropdown-wrapper">
      <select
        value={publication}
        onChange={handleChange}
        className="native-dropdown"
      >
        <option value="">All Publications</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}