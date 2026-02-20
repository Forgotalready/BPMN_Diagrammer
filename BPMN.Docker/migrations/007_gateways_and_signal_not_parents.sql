CREATE OR REPLACE FUNCTION check_parent_not_in_gateways()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.parent_id IN (SELECT element_id FROM gateways) THEN
        RAISE EXCEPTION 'parent_id cannot reference a gateway';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_check_parent_gateways
    BEFORE INSERT OR UPDATE ON elements
    FOR EACH ROW
    EXECUTE FUNCTION check_parent_not_in_gateways();

CREATE OR REPLACE FUNCTION check_parent_not_in_events()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.parent_id IN (SELECT element_id FROM events) THEN
        RAISE EXCEPTION 'parent_id cannot reference a events';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_check_parent_events
    BEFORE INSERT OR UPDATE ON elements
    FOR EACH ROW
    EXECUTE FUNCTION check_parent_not_in_events();