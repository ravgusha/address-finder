import { DaDataSuggestion } from '../../types';
import AddressItem from '../AddressItem';

import './style.scss';

interface IAddressList {
  addresses: DaDataSuggestion[];
}

const AddressList = ({ addresses }: IAddressList) => {
  console.log(addresses);
  return (
    <section>
      <h3>Адреса</h3>
      <ul className="adresses">
        {addresses.map((address, i) => {
          return <AddressItem key={i} address={address.value} />;
        })}
      </ul>
    </section>
  );
};

export default AddressList;
