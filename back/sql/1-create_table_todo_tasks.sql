USE summer_test;

CREATE TABLE `todo_tasks`
(
    id         BIGINT       NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task       VARCHAR(255) NOT NULL,
    mail       VARCHAR(255) NOT NULL,
    name1      VARCHAR(255) NOT NULL,
    surname    VARCHAR(255) NOT NULL,
    created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
)
    engine = innodb
    charset = utf8mb4;

