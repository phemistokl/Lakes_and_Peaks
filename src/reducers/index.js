import { combineReducers } from 'redux';

const InitialState = [
	{
		id: 0,
		title: "Приэльбрусье",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		videolink: "https://www.youtube.com/watch?v=_Mursg7TZsE",
		coordX: 0,
		coordY: 0,
		phone: "+79093444545",
		email: "geg@gmail.com",
	},
	{
		id: 1,
		title: "Долина Нарзанов",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		videolink: "https://www.youtube.com/watch?v=_Mursg7TZsE",
		coordX: 0,
		coordY: 0,
		phone: "+79093444545",
		email: "geg@gmail.com",
	},
	{
		id: 2,
		title: "Домбай",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		videolink: "https://www.youtube.com/watch?v=_Mursg7TZsE",
		coordX: 0,
		coordY: 0,
		phone: "+79093444545",
		email: "geg@gmail.com",
	},
	{
		id: 3,
		title: "Фиагдон",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		videolink: "https://www.youtube.com/watch?v=_Mursg7TZsE",
		coordX: 0,
		coordY: 0,
		phone: "+79093444545",
		email: "geg@gmail.com",
	},
	{
		id: 4,
		title: "Голубые озера",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		videolink: "https://www.youtube.com/watch?v=_Mursg7TZsE",
		coordX: 0,
		coordY: 0,
		phone: "+79093444545",
		email: "geg@gmail.com",
	},
	{
		id: 5,
		title: "Атажукинский сад",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		videolink: "https://www.youtube.com/watch?v=_Mursg7TZsE",
		coordX: 0,
		coordY: 0,
		phone: "+79093444545",
		email: "geg@gmail.com",
	},
	{
		id: 6,
		title: "Место",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		videolink: "https://www.youtube.com/watch?v=_Mursg7TZsE",
		coordX: 0,
		coordY: 0,
		phone: "+79093444545",
		email: "geg@gmail.com",
	},
];

function place(state = {}, action) {
	switch (action.type) {
		case 'ADD_PLACE': {
			return {
					id: action.id,
					title: action.title,
					description: action.description,
					videolink: action.videolink,
					coordX: action.coordX,
					coordY: action.coordY,
					phone: action.phone,
					email: action.email
				}
		}

		case 'CURRENT_PLACE': {
        return state.id == action.id;
    }

		case 'UPDATE_PLACE': {
			if (state.id == action.id) {
				return {
					id: action.id,
					title: action.title,
					description: action.description,
					videolink: action.videolink,
					coordX: action.coordX,
					coordY: action.coordY,
					phone: action.phone,
					email: action.email
					}
				} else {
					return state
				}
    }

		case 'DELETE_PLACE': {
        return state.id !== action.id;
    }

		default: {
			return state;
		}
	}
};

function places(state = { places: InitialState, current: [{id: ""}] }, action) {
	switch (action.type) {
		case 'ADD_PLACE': {
			return {
        ...state,
        places: [...state.places,
					place(undefined, action)
				]
      }
		}

		case 'CURRENT_PLACE': {
      return {
				...state,
				current: state.places.filter(item => place(item, action))
			}
    }

		case 'UPDATE_PLACE': {
      return {
				...state,
				places: state.places.map(item => place(item, action))
			}
    }

		case 'DELETE_PLACE': {
      return {
				...state,
				places: state.places.filter(item => place(item, action))
			}
    }

		default: {
			return state;
		}
	}
};

function modal( state = { isOpen: false, newEntry: false }, action) {
    switch(action.type) {
      case 'TOGGLE_MODAL':
        return {
          ...state,
          isOpen: !state.isOpen
        };
      case 'CREATE_PLACE':
        return {
          ...state,
          newEntry: true
        };
      case 'CURRENT_PLACE':
        return {
          ...state,
          newEntry: false
        };
      default:
        return state
    }
};

export default combineReducers({ places, place, modal });
