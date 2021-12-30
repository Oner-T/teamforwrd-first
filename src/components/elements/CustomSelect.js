import Select from 'react-select';
import styled from 'styled-components';

const CustomSelect = styled(Select)`
& .Select__indicator Select__dropdown-indicator {
    width: 105px;
    height: 30px;
    border-radius: 15px;
  }
`;

export default CustomSelect;