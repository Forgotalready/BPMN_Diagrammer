CREATE TABLE events(
    element_id BIGINT PRIMARY KEY REFERENCES elements(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL
);