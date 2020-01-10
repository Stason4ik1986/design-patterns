Паттерны проектирования
=======================

### Порождающие паттерны
*   ***[Singleton (одиночка)](https://github.com/Stason4ik1986/design-patterns/blob/master/creational/singleton.js)*** - просто обЪект, который в системе существует в единственном экземпляре.
    Плюс к нему есть какая-то глобальноая точка доступа.
    Этот паттерн использовался настолько часто, что перешел в ряды анти-паттернов
    Используется, когда нужен обЪект в единственным экземпляре,
    и к которому может быть доступ из разных частей программы (корзина, карта клиента).

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #1 - Singleton (Одиночка)](https://www.youtube.com/watch?v=GrYs0qDQEp0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=2)

*   ***[Factory (фабрика)](https://github.com/Stason4ik1986/design-patterns/blob/master/creational/factory.js)*** - класс, на основе которого будут создаваться определенные обЪекты на основании входных данных.
    Исходный класс можно назвать суперклассом.
    Используем фабрику, когда нужно создавать множество однотипных обЪектов,
    т.е обЪекты с одинаковой структурой, но разными данными,
    причем эти обЪекты могут содержать как свойства, так и методы.

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #2 - Factory Method (Фабричный метод)](https://www.youtube.com/watch?v=wmla1hxxvQI&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=3)

*   ***[Abstract Factory (Абстрактная фабрика)](https://github.com/Stason4ik1986/design-patterns/blob/master/creational/abstract-factory.js)*** - паттерн, который создает интерфейс, группирующий другие фабрики,
    которые логически связаны друг с другом.
    Условно говоря, - это своеобразная абстракция для фабрики и фабричного метода

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #3 - Abstract Factory (Абстрактная фабрика)](https://www.youtube.com/watch?v=LDA4riuzgiw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=4)

*   ***[Prototype (Прототип)](https://github.com/Stason4ik1986/design-patterns/blob/master/creational/prorotype.js)*** - паттерн, который позволяет копировать обЪекты,
    не вдаваясь в подробности их реализации.
    В шаблоне прототип, у нас есть базовая реализация класса
    и используя упрощенный интерфейс мы создаем клоны обЪектов.
    А клоны, в случае необходимости мы можем изменить
    и заточить под выполнение определенных задач
    Благодаря этому паттерну мы создаем копии обЪектов с минимальной затратой памяти

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #4 - Prototype (Прототип)](https://www.youtube.com/watch?v=nDth2LO5ra4&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=5)

    
*   ***[Bridge (Мост)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/bridge.js)*** - паттерн, который разделяет один или несколько классов
    на несколько отдельных иерархий, которые называются абстракция и реализация,
    что в свою очередь позволяет изменять их, без зависимостей друг от друга.
    Абстракция - специальная обертка, которая сама не выполняет работу,
    а делигирует ее одному из обЪектов реализации.
    Реализация - обЪект в котором описана непосредственно сама реализация

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #11 - Bridge (Мост)](https://www.youtube.com/watch?v=pNVuMif0bc0&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=12)

### Структурные паттерны
*   ***[Builder (Строитель)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/builder.js)*** - используется для создания обЪектов со сложными состояниями.
    Может иметь дополнительный слой абстракции - директор,
    который управляет несколькими строителями.
    Создает сложные обЪекты, инициализацию которых сложно уместить в конструкторе.
    Данный паттерн в очень удобной форме позволяет создавать различные конфигурация обЪектов,
    не засоряя исходный контруктор дополнительной логикой

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #5 - Builder (Строитель)](https://www.youtube.com/watch?v=P36gibfPaXs&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=6)

*   ***[Decorator (Декоратор)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/decorator.js)*** - паттерн, с помощью которого мы можем добавлять обЪектам новые свойства и методы,
    т.е оборачивать наш обЪект в этот самый клас декоратора, и тем самым расширять его возможности.
    Самый простой пример использования - создание большого количества подклассов.
    Т.е на основании какой-то заготовки мы можем создавать другие классы

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #6 - Decorator (Декоратор)](https://www.youtube.com/watch?v=gXvKHKQB2DI&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=7)

*   ***[Facade (Фасад)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/facade.js)*** - паттерн, с помощью которого мы можем собрать различные сложные структуры, обЪединить их и выдать            простой способ манипуляций

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #7 - Facade (Фасад)](https://www.youtube.com/watch?v=AWXBbIK-KMo&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=8)

*   ***[Proxy (Заместитель)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/proxy.js)*** - паттерн, который вместо реальных обЪектов предоставляет обЪекто-заменители.
    Эти обЪекты перехватывают вызов к оригиналам
    и позволяют что-то сделать до/после обращения к оригинальному обЪекту.
    Т.е это своего рода прослойка, которая позволяет провести какие-то манипуляции,
    до того, как отдать дальнейший контроль (например авторизация).

    Виды:
    Виртуальный - аналог ленивой загрузки;
    Логирующий - хранение истории обращений;
    Защищающий - авторизация;
    Кеширующий - частичное кеширование результатов запросов клиента и управление ими;

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #8 - Proxy (Заместитель)](https://www.youtube.com/watch?v=9GvBg7pTOUY&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=9)

*   ***[Adapter (Адаптер)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/adapter.js)*** - паттерн, который оборачивает ни с чем не совместимый обЪект
    и делает совместимым, не изменяя исходный код.

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #9 - Adapter (Адаптер)](https://www.youtube.com/watch?v=w6O9Kr41frc&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=10)

*   ***[Composite (Компоновщик)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/composite.js)*** - паттерн, который позволяет сгруппировать множество обЪектов в древовидную структуру
    и работать с этой структурой так, как будто это один единственный обЪект
    (ключевая структура этого паттерна - дерево).
    Сам обЪект мало знает о вложенных в него структурах,
    он просто реализует те же методы, что и вложенные в него компоненты,
    но вместо непосредственного вызова своего метода, 
    он передает вызовы всем вложенным компонентам,
    а те компоненты передают вызовы своим собственным вложенным структурам.
    Все вложенные компоненты - листья дерева, связь между ними - ветки

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #10 - Composite (Компоновщик)](https://www.youtube.com/watch?v=H-CwPjUB5Rw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=11)

*   ***[Flyweight (Легковес)](https://github.com/Stason4ik1986/design-patterns/blob/master/structural/bridge.js)*** - паттерн, который позволяет вместить
    большее количество определенных обЪектов в выделенную оперативную память.
    Другими словами, он позволяет экономить ресурсы,
    разделяя общее состояние обЪектов между собой,
    вместо хранения одинаковых данных в каждом обЪекте, 
    что в принципе похоже на кеширование данных.
    Свойства лековеса не возможно изменить после создания,
    т.е все свое внутреннее он должен получить через параметры конструктора,
    не должно быть никаких публичных полей и сеттеров
    Создавать лековесы намного удобнее с помощью фабрики

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #12 - Flyweight (Легковес)](https://www.youtube.com/watch?v=hlxRecs_r3Y&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=13)

### Поведенческие паттерны
*   ***[Mediator (Посредник)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/mediator.js)*** - паттерн, который позволяет уменьшить взаимосвязь классов между собой,
    вынося межклассовые связи в так называемый класс посредник

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #13 - Mediator (Посредник)](https://www.youtube.com/watch?v=tWZfcmmGf1w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=14)

*   ***[Iterator (Итератор)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/iterator.js)*** - паттерн, который дает возможность
    последовательно обходить элементы составных обЪектов,
    не раскрывая их внутреннее представление
    (визуально напоминает плеер, когда мы нажимаем кнопки вперед/назад)
    Ключевая идея паттерна, заключается в том,
    чтобы вынести поведение обхода коллекции из самой коллекции
    в отдельный класс.
    Сам класс содержит 2 ключевых метода:
    next(),
    hasNext() - проверяет существование следующего элемента;

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #14 - Iterator (Итератор)](https://www.youtube.com/watch?v=bjH4NHItd3U&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=15)


*   ***[Chain of Responsibility (Цепочка обязанностей)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/chain-of-responsibility.js)*** - паттерн, который позволяет передавать запросы последовательно
    по цепочки обработчиков. Причем его особенность в том,
    что каждый последующий обработчик решает задачу,
    может ли он сам обработать задачу,
    либо его нужно передать дальше по цепочке.
    Пример: платежная система с разными способами оплаты

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #15 - Chain of Responsibility (Цепочка обязанностей)](https://www.youtube.com/watch?v=stpzkOFoWdY&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=16)

*   ***[Strategy (Стратегия)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/strategy.js)*** - паттерн, который определяет схожие алгоритмы
    и помещает их в каждый отдельный класс (стратегии), после чего,
    между этими алгоритмами можно автоматически переключаться
    в ходе выполнения программы
    Используется при расширении возможностей приложения,
    чтобы не превратить код в нечитаемое полотно

    Все стратегии должны иметь одинаковый интерфейс взаимодействия,
    после чего у нас есть один глобальный или корневой класс,
    который в зависимости от той или иной ситуации,
    делегирует выполнение алгоритмов на ту или иную стратегию динамически.
    Сам же обЪект называется контекстом, так как носит ссылку на ту или иную стратегию

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #16 - Strategy (Стратегия)](https://www.youtube.com/watch?v=te-teUr0N_w&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=17)

*   ***[Memento (Снимок)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/memento.js)*** - паттерн, который позволяет
    сохранять и восстанавливать предыдущее состояние обЪекта.
    К примеру редактор с функцией восстановлеия (Ctrl + Z)

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #17 - Memento (Снимок)](https://www.youtube.com/watch?v=kAY-ozumlr4&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=18)

*   ***[Template Method (Шаблонный метод)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/template-method.js)*** - паттерн, который определяет базовые шаги исполнения алгоритма
    и выполнение каждого из этих шагов делегирует на соответствующие методы или подклассы.

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #18 - Template Method (Шаблонный метод)](https://www.youtube.com/watch?v=kFDEyshivVc&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=19)

*   ***[Visitor (Посетитель)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/visitor.js)*** - паттерн, который добавляет новую функциональность
    к уже существующим классам, причем не изменяя исходный код класса.

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #19 - Visitor (Посетитель)](https://www.youtube.com/watch?v=dyg13zxD9xw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=20)

*   ***[Command (Команда)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/command.js)*** - паттерн, который помогает инкапсулировать
    некоторые действия и необходимые для них данные,
    и таким образом позволяет отделить клиента от получателя.
    Можно сказать, что он превращает запросы в обЪекты,
    что позволяет пердавать их как аргументы в методы.

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #20 - Command (Команда)](https://www.youtube.com/watch?v=jWsyfeOkv9Q&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=21)

*   ***[Observer (Наблюдатель)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/observer.js)*** - паттерн, который создает механизм подписки,
    позволяющий одним обЪектам следить за изменениями состояния других.
    С ростом приложения, может понадобиться хранить данные,
    от которых зависят несколько компонентов, в одном обЪекте или классе (store).
    В свою очередь он содержит определенный свойства,
    от изменения которых зависит логика определенных компонентов.
    Он соответсвенно содержит список этих зависящих компонентов,
    которые в данном кейсе называются подписчики.
    Также в нем есть методы, с помощью которых можно изменять наблюдаемые свойства,
    и методы, которые оповещают о том, что свойство изменилось и на это неплохо бы отреагировать.

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #21 - Observer (Наблюдатель)](https://www.youtube.com/watch?v=LgfWY2bDAtA&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=22)

*   ***[State (Состояние)](https://github.com/Stason4ik1986/design-patterns/blob/master/behavioral/state.js)*** - паттерн, который позволяет менять обЪектам свое поведение,
    в зависимости от состояния, что со стороны выглядит так, как-будто в работу
    включился другой класс.

    Ссылка на оригинальный источник:
    [JavaScript Design Patterns #22 - State (Состояние)](https://www.youtube.com/watch?v=W_11rR4UFNw&list=PLNkWIWHIRwMGzgvuPRFkDrpAygvdKJIE4&index=23)


