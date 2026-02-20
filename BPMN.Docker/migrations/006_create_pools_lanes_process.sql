CREATE TABLE pools(
    element_id BIGINT PRIMARY KEY REFERENCES elements(id) ON DELETE CASCADE,
    name TEXT
);

CREATE TABLE lanes(
    element_id BIGINT PRIMARY KEY REFERENCES elements(id) ON DELETE CASCADE,
    name TEXT
);

CREATE TABLE process(
    element_id BIGINT PRIMARY KEY REFERENCES elements(id) ON DELETE CASCADE,
    name TEXT
);