import Vue from 'vue';

const state = {
  contacts: [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "010-692-6593 x09125",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "1-463-123-4447",
      "website": "ramiro.info"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "1-477-935-8478 x6430"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "210.067.6132"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "phone": "586.493.6943 x140"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "(775)976-6794 x41206"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "024-648-3804"
    }
  ],
  contact: null,
  contactIndex: null,
  prevStateOfContact: {}
};

export const mutationTypes = {
  updateContacts: '[contact] updateContacts',
  updateContact: '[contact] updateContact',
  addNewContact: '[contact] addNewContact',
  deleteContact: '[contact] deleteContact',
  addNewField: '[contact] addNewField',
  deleteField: '[contact] deleteField',
  loadPrevStateOfContact: '[contact] loadPrevStateOfContact'
};

export const getterTypes = {
  allContacts: '[contact] allContacts',
  getContact: '[contact] getContact'
};

const mutations = {
  // update all contacts
  [mutationTypes.updateContacts](state, contacts) {
    state.contacts = contacts;
    state.loading = false;
  },

  // update contact
  [mutationTypes.updateContact](state, data) {
    Object.keys(state.contact).forEach(key => {
      if (data.updateData[key]) {
        Vue.set(state.contacts[state.contactIndex], key, data.updateData[key]);
      }
    });
  },

  // add new contact
  [mutationTypes.addNewContact](state, newContact) {
    state.contacts.push(newContact);
  },

  // delete contact
  [mutationTypes.deleteContact](state, id) {
    let index = null;

    state.contacts.find((contact, i) => {
      if (contact.id === id) {
        index = i;
      }
    });

    state.contacts.splice(index, 1);
  },

  // add new field to contact
  [mutationTypes.addNewField](state, field) {
    if (!field.val) {
      field.val = '';
    }

    Vue.set(state.contacts[state.contactIndex], field.name, field.val);
  },

  // delete field in contact
  [mutationTypes.deleteField](state, fieldName) {
    Vue.delete(state.contacts[state.contactIndex], fieldName);
  }
};

const getters = {
  // get all contacts
  [getterTypes.allContacts](state) {
    return state.contacts;
  },

  // get contact
  [getterTypes.getContact](state) {
    return id => {
      if (!state.loading) {
        return state.contacts.find((contact, index) => {
          state.contact = contact;
          state.contactIndex = index;

          return contact.id === id;
        });
      }
    };
  }
};

export default {
  state,
  mutations,
  getters
};