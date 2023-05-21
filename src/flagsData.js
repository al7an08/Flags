export const flagsData = [
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/ca.png',
      correctAnswer: 'Канада',
      options: ['Великобритания', 'Россия', 'Канада', 'США']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/ar.png',
      correctAnswer: 'Аргентина',
      options: ['Аргентина', 'Вьетнам', 'Мадагаскар', 'Казахстан']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/ru.png',
      correctAnswer: 'Россия',
      options: ['Кыргызстан', 'Россия', 'Мексика', 'Франция']
    },
    // Добавьте остальные страны аналогичным образом
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/br.png',
      correctAnswer: 'Бразилия',
      options: ['Бразилия', 'Германия', 'Италия', 'Япония']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/cn.png',
      correctAnswer: 'Китай',
      options: ['Китай', 'Индия', 'Россия', 'США']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/in.png',
      correctAnswer: 'Индия',
      options: ['Индия', 'Канада', 'Австралия', 'Бразилия']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/us.png',
      correctAnswer: 'США',
      options: ['Великобритания', 'Россия', 'Канада', 'США']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/id.png',
      correctAnswer: 'Индонезия',
      options: ['Мексика', 'Франция', 'Индонезия', 'Япония']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/pk.png',
      correctAnswer: 'Пакистан',
      options: ['Пакистан', 'Россия', 'Китай', 'Саудовская Аравия']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/ng.png',
      correctAnswer: 'Нигерия',
      options: ['Нигерия', 'Южная Африка', 'Египет', 'Эфиопия']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/bd.png',
      correctAnswer: 'Бангладеш',
      options: ['Бангладеш', 'Индия', 'Таиланд', 'Пакистан']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/ru.png',
      correctAnswer: 'Россия',
      options: ['Украина', 'Россия', 'Польша', 'Финляндия']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/mx.png',
      correctAnswer: 'Мексика',
      options: ['Бразилия', 'Мексика', 'Аргентина', 'Колумбия']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/jp.png',
      correctAnswer: 'Япония',
      options: ['Япония', 'Китай', 'Индия', 'Сингапур']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/ph.png',
      correctAnswer: 'Филиппины',
      options: ['Таиланд', 'Филиппины', 'Вьетнам', 'Малайзия']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/eg.png',
      correctAnswer: 'Египет',
      options: ['Египет', 'Нигерия', 'Южная Африка', 'Кения']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/vn.png',
      correctAnswer: 'Вьетнам',
      options: ['Индонезия', 'Вьетнам', 'Таиланд', 'Малайзия']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/de.png',
      correctAnswer: 'Германия',
      options: ['Германия', 'Франция', 'Италия', 'Испания']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/tr.png',
      correctAnswer: 'Турция',
      options: ['Турция', 'Россия', 'Греция', 'Египет']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/ir.png',
      correctAnswer: 'Иран',
      options: ['Иран', 'Саудовская Аравия', 'Ирак', 'Египет']
    },
    {
      flagUrl: 'https://raw.githubusercontent.com/maksonchek/Flags/main/zw.png',
      correctAnswer: 'Зимбабве',
      options: ['Южная Африка', 'Зимбабве', 'Кения', 'Нигерия']
    }
  ];
  
  export const getRandomQuestionIndex = () => {
    return Math.floor(Math.random() * flagsData.length);
  };