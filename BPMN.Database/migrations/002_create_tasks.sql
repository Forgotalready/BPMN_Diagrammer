CREATE TABLE tasks(
    element_id BIGINT PRIMARY KEY REFERENCES elements(id) ON DELETE CASCADE,
    text_description TEXT,
    task_type TEXT NOT NULL
);