import Item from "./Item";
import { INDUSTRIES,  SERVICES,COMPANY,LEGAL,   } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={INDUSTRIES} title="INDUSTRIES" />
      <Item Links={SERVICES} title="SERVICES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={LEGAL} title="LEGAL" />

      
    </div>
  );
};

export default ItemsContainer;