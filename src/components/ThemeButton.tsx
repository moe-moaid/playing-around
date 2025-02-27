import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { setTheme } from 'src/redux/theme/themeSlice';
export default function ThemeButton() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}>{theme}</button>;
}
