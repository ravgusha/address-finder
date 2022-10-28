interface IAddressItem {
  key: number;
  address: string;
}

const AddressItem = ({address}: IAddressItem) => {
  return <li>{address}</li>;
};

export default AddressItem;
