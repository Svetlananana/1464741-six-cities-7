export const ActionType = {
  CHANGE_CITY: 'city/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
};


// Создайте новый файл для описания действий (например, action.js) и опишите в нём список действий,
// на основании которых формируется новый state. На данном этапе нам потребуется несколько действий:
// изменение города и заполнение списка предложений по аренде. Действие для заполнения списка предложений
// должно поместить в хранилище все предложения по аренде. Пока используем тестовые данные.

