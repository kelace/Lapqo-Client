### SHARED

### ENTITIES

- єдина сутність (Post, type.post, getPost)
- dumb compoents

### FEATURES

### WIDGETS

- незалежна частина на сторінки.
- композиція кілька блоків (entities/features)
- sidebar, header, footer, user-posts(posts-list + comments-list)

### PAGES

Це базові запити ? () - це entites
Це описує конкретну сутність (одна єдиниця Post, User, Comment) - це entites
Це дамб-компонент ? - це entities
Це мутація даних ? (delte, edit, update) - це features
Це якась дія користувача ? (like, register, theme-toggle) - це features
Це смарт компонент ? - це widgets

entities — усе про конкретну сутність (Post, User).
features — дії користувача (create, edit, login, follow).
widgets — великі блоки сторінки (feed, sidebar, profile).

---

entities — доменні сутності (Post, User)
features — дії користувача (like, create post, follow user)
widgets — великі UI-блоки сторінки
pages — композиція віджетів
