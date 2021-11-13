
//----------------Базовая теория. start ---------------
//Пример статического экшена
export const myAction = {
    type: 'MY_ACTION',
    payload: 'super payload'
}

export const myAction2 = {
    type: 'MY_ACTION__2',
    payload: 'super payload 2'
}

//Пример диннамического экшена: фабрика объектов
export const myActionDynamic =(value) => {
    return {   type: 'MY_ACTION_DYNAMIC',
               payload: value
            }

}

//Пример диннамического экшена: фабрика объектов. Просто другой синтаксис (репета. Зан 11. 26:21)
export const myActionDynamic2 =value => (
    {
      type: 'MY_ACTION_DYNAMIC',
      payload: value
    }

)

//----------------Базовая теория. end---------------


// ========================  Переделываем Counter. start ========================  

export const increment = value => {
    return {
            type: 'counter/Increment',
            payload: value
           }
}

export const decrement = value => {
    return {
            type: 'counter/Decrement',
            payload: value
           }
}
// ========================  Базовая Counter. end ======================== 