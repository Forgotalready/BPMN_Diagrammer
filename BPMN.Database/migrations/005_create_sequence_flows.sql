CREATE TABLE sequence_flows (
    source_element_id BIGINT NOT NULL REFERENCES elements(id) ON DELETE CASCADE,
    target_element_id BIGINT NOT NULL REFERENCES elements(id) ON DELETE CASCADE,
    condition_expression TEXT,
    is_default BOOLEAN DEFAULT FALSE
);

ALTER TABLE sequence_flows
ADD CONSTRAINT primary_key_sequence_flows PRIMARY KEY (source_element_id, target_element_id);