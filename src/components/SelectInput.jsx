export const SelectInput = ({ inputID, state, dropdownList, handleState }) => {
  const INPUT = document.getElementById(inputID);
  const MENU = document.getElementById(`${inputID}-menu`);

  const handleClick = () => {
    if (INPUT?.classList.contains("select-active")) {
      MENU.classList.remove("menu-active");
      setTimeout(() => {
        INPUT.classList.remove("select-active");
      }, 300);
    } else {
      INPUT?.classList.add("select-active");
      setTimeout(() => {
        MENU?.classList.add("menu-active");
      }, 300);
    }
  };

  const handleSelection = (e) => {
    handleState(e.target.dataset.value);
    handleClick();
  };

  return (
    <div id={inputID} className="select-input">
      <ul id={`${inputID}-menu`} className="select-menu">
        {dropdownList.map((value) => {
          return (
            <li
              key={value}
              data-value={value}
              className="select-item"
              onClick={handleSelection}
            >
              {value}
            </li>
          );
          // }
        })}
      </ul>
    </div>
  );
};
