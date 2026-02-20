CREATE TABLE elements(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    parent_id BIGINT REFERENCES elements(id),
    element_type TEXT NOT NULL,

    CONSTRAINT element_type_check
    CHECK (element_type IN (
        'task',
        'gateway',
        'event',
        'pool',
        'lane',
        'process'
    ))
);