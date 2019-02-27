import { APP_FONT_SIZE, APP_BODY_TEXT_COLOR } from '../../constants';

export default {
  formCard: {
    height: 200, width: 300, backgroundColor: 'white', margin: 20, padding: 20,
  },
  formTitle: {
    fontSize: APP_FONT_SIZE, fontWeight: 'bold', color: APP_BODY_TEXT_COLOR, height: 100,
  },
  formHorizontalBar: {
    borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 20, marginBottom: 20,
  },
  formCreatedAt: {
    color: APP_BODY_TEXT_COLOR, right: 0, position: 'absolute', bottom: 0, marginRight: 15, marginBottom: 10,
  },
};
