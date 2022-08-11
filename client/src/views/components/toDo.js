import moreIcon from '../../../assets/images/more.svg';
import ListStyle from '../../styles/list.module.css';

const ToDo = `
  <li class=${ListStyle.li}>
    <span></span>
    <button class=${ListStyle.button}>
      <img src=${moreIcon} alt='more' />
    </button>
  </li>
`;

export default ToDo;
