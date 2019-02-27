import { Platform } from 'react-native';
import { APP_THEME_COLOR, APP_TEXT_COLOR, APP_FONT_SIZE } from '../../constants';

export default {
  headerMain: {
    backgroundColor: APP_THEME_COLOR, height: 60, width: '100%', flexDirection: 'row', marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  headerTitle: {
    color: APP_TEXT_COLOR, fontSize: APP_FONT_SIZE, marginTop: 16, marginLeft: 20,
  },
  headerImage: {
    height: 47, resizeMode: 'contain', marginTop: 6, position: 'absolute', right: -50,
  },
  backButton: {
    marginTop: 12,
  },
};
