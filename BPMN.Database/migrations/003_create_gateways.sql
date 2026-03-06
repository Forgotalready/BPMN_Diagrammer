CREATE TABLE gateways(
    element_id BIGINT PRIMARY KEY REFERENCES elements(id) ON DELETE CASCADE,
    gateway_type TEXT NOT NULL
);