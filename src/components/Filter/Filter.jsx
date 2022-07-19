import { useSelector, useDispatch } from 'react-redux';
import actions from 'components/redux/actions';
import s from './Filter.module.css';

export const Filter = ({ title }) => {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span className={s.label__title}>{title}</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};