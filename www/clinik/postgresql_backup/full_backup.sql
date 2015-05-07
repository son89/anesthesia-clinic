--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.1
-- Dumped by pg_dump version 9.4.1
-- Started on 2015-05-06 23:57:32 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

DROP DATABASE postgres;
--
-- TOC entry 2050 (class 1262 OID 12141)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 2051 (class 1262 OID 12141)
-- Dependencies: 2050
-- Name: postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 6 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2052 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 183 (class 3079 OID 11861)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2054 (class 0 OID 0)
-- Dependencies: 183
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 178 (class 1259 OID 16425)
-- Name: admins; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE admins (
    id integer NOT NULL,
    name character varying(50),
    family character varying(50),
    username character varying(50),
    password character varying(50),
    email character varying(50),
    mobile_number character varying(30)
);


ALTER TABLE admins OWNER TO postgres;

--
-- TOC entry 177 (class 1259 OID 16423)
-- Name: admins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE admins_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE admins_id_seq OWNER TO postgres;

--
-- TOC entry 2055 (class 0 OID 0)
-- Dependencies: 177
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE admins_id_seq OWNED BY admins.id;


--
-- TOC entry 180 (class 1259 OID 16432)
-- Name: collection; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE collection (
    col_id integer NOT NULL,
    data character varying(333),
    parent_id integer
);


ALTER TABLE collection OWNER TO postgres;

--
-- TOC entry 179 (class 1259 OID 16430)
-- Name: collection_col_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE collection_col_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE collection_col_id_seq OWNER TO postgres;

--
-- TOC entry 2056 (class 0 OID 0)
-- Dependencies: 179
-- Name: collection_col_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE collection_col_id_seq OWNED BY collection.col_id;


--
-- TOC entry 181 (class 1259 OID 16436)
-- Name: pateints_operation_history; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE pateints_operation_history (
    pat_id integer,
    operation_type integer[],
    operation_date character varying(20),
    problem_during_operation integer
);


ALTER TABLE pateints_operation_history OWNER TO postgres;

--
-- TOC entry 173 (class 1259 OID 16397)
-- Name: patients_basic_informations; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE patients_basic_informations (
    id integer NOT NULL,
    name character varying(30),
    family character varying(30),
    email character varying(40),
    mobile character varying(20),
    trace_code character varying(30),
    age integer,
    weight integer,
    stature integer,
    validation_info boolean NOT NULL,
    sex character(1),
    personal_code character varying(30)
);


ALTER TABLE patients_basic_informations OWNER TO postgres;

--
-- TOC entry 174 (class 1259 OID 16400)
-- Name: patient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE patient_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE patient_id_seq OWNER TO postgres;

--
-- TOC entry 2057 (class 0 OID 0)
-- Dependencies: 174
-- Name: patient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE patient_id_seq OWNED BY patients_basic_informations.id;


--
-- TOC entry 182 (class 1259 OID 16442)
-- Name: patients_last_month_drugs; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE patients_last_month_drugs (
    pat_id integer[],
    drug integer,
    description text
);


ALTER TABLE patients_last_month_drugs OWNER TO postgres;

--
-- TOC entry 172 (class 1259 OID 16384)
-- Name: patients_ppo_from_informations; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE patients_ppo_from_informations (
    pat_id integer,
    operation integer,
    operator_name character varying(30),
    operation_date character varying(20),
    steroids_last_year boolean,
    cigarette_used boolean,
    cigarette_number_in_day integer,
    cigarette_using_in_a_year integer,
    cigarette_using boolean,
    alcohol_used boolean,
    psychotropic_used boolean,
    stair_floor_continuosly boolean,
    heart_problem_type integer,
    hypertension boolean,
    diabet boolean,
    lung_problem boolean,
    lung_problem_type integer,
    currently_recently_sick_fever_chills_etc character varying(200),
    "patient_family_severe bleeding" integer,
    any_blood_problem integer,
    kidney_problem integer,
    liver_problem integer,
    digestive_system_problems integer,
    lumbago boolean,
    cancer_chemotherapy_radiotherapy boolean,
    pregnant boolean,
    menstruation_last_time_date character varying(20),
    during_anesthesia_problem integer,
    ability_routines_day_problem boolean,
    night_kh_kh boolean,
    other_problem character varying(800),
    patient_question character varying(800)
);


ALTER TABLE patients_ppo_from_informations OWNER TO postgres;

--
-- TOC entry 2058 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.lung_problem; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.lung_problem IS 'ایا بیمار مشکلات ریوی داشته است یا خیر؟';


--
-- TOC entry 2059 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.lung_problem_type; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.lung_problem_type IS 'نوع بیمار قلبی';


--
-- TOC entry 2060 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.currently_recently_sick_fever_chills_etc; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.currently_recently_sick_fever_chills_etc IS 'بیمار در حال حاضر یا به تازگی مریضی داشته که با سرماخودگی، تب، لرز، آنفولانزا یا سرفه خلط دار همراه بوده است.';


--
-- TOC entry 2061 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations."patient_family_severe bleeding"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations."patient_family_severe bleeding" IS 'بیمار یا کسی از خانواده ی بیمار که تا بحال مشکل خونریزی شدیدی داشته؟';


--
-- TOC entry 2062 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.any_blood_problem; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.any_blood_problem IS 'ایا بیمار هر گونه مشکل خونی داشته است.';


--
-- TOC entry 2063 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.kidney_problem; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.kidney_problem IS 'ایا بیمار مشکلات کلیوی داشته است.';


--
-- TOC entry 2064 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.liver_problem; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.liver_problem IS 'ایا بیمار مشکلات کبدی داشته است؟';


--
-- TOC entry 2065 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.digestive_system_problems; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.digestive_system_problems IS 'آیا بیمار تا بحال مشکلات سیستم گوارشی داشته.';


--
-- TOC entry 2066 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.lumbago; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.lumbago IS 'ایا بیمار کمر درد است؟';


--
-- TOC entry 2067 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.cancer_chemotherapy_radiotherapy; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.cancer_chemotherapy_radiotherapy IS 'آیا تابحال بیمار بخاطر سرطان تحت کموتراپی با رادیوتراپی قرار گرفته.';


--
-- TOC entry 2068 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.during_anesthesia_problem; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.during_anesthesia_problem IS 'ایا بیمار طی بیهوشی یا جراحی مشکل داشته است.';


--
-- TOC entry 2069 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.night_kh_kh; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.night_kh_kh IS 'ایا بیمار خر خر شبانه دارد؟';


--
-- TOC entry 2070 (class 0 OID 0)
-- Dependencies: 172
-- Name: COLUMN patients_ppo_from_informations.other_problem; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN patients_ppo_from_informations.other_problem IS 'مشکلات اشاره نشده';


--
-- TOC entry 175 (class 1259 OID 16402)
-- Name: permission; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE permission (
    id integer NOT NULL,
    username character varying(40) NOT NULL,
    pass character varying(40) NOT NULL
);


ALTER TABLE permission OWNER TO postgres;

--
-- TOC entry 176 (class 1259 OID 16405)
-- Name: permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE permission_id_seq OWNER TO postgres;

--
-- TOC entry 2071 (class 0 OID 0)
-- Dependencies: 176
-- Name: permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE permission_id_seq OWNED BY permission.id;


--
-- TOC entry 1920 (class 2604 OID 16428)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY admins ALTER COLUMN id SET DEFAULT nextval('admins_id_seq'::regclass);


--
-- TOC entry 1921 (class 2604 OID 16435)
-- Name: col_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY collection ALTER COLUMN col_id SET DEFAULT nextval('collection_col_id_seq'::regclass);


--
-- TOC entry 1918 (class 2604 OID 16409)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY patients_basic_informations ALTER COLUMN id SET DEFAULT nextval('patient_id_seq'::regclass);


--
-- TOC entry 1919 (class 2604 OID 16410)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY permission ALTER COLUMN id SET DEFAULT nextval('permission_id_seq'::regclass);


--
-- TOC entry 2041 (class 0 OID 16425)
-- Dependencies: 178
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO admins (id, name, family, username, password, email, mobile_number) VALUES (1, 'masoud', 'ghorbanzadeh', 'masoudgh', '1', 'm.gh@linuxmail.org', '09158955356');


--
-- TOC entry 2072 (class 0 OID 0)
-- Dependencies: 177
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('admins_id_seq', 1, false);


--
-- TOC entry 2043 (class 0 OID 16432)
-- Dependencies: 180
-- Data for Name: collection; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2073 (class 0 OID 0)
-- Dependencies: 179
-- Name: collection_col_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('collection_col_id_seq', 1, false);


--
-- TOC entry 2044 (class 0 OID 16436)
-- Dependencies: 181
-- Data for Name: pateints_operation_history; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2074 (class 0 OID 0)
-- Dependencies: 174
-- Name: patient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('patient_id_seq', 12, true);


--
-- TOC entry 2036 (class 0 OID 16397)
-- Dependencies: 173
-- Data for Name: patients_basic_informations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO patients_basic_informations (id, name, family, email, mobile, trace_code, age, weight, stature, validation_info, sex, personal_code) VALUES (9, 'masoud', 'ghorbanzadeh', '0921777221', '09158955356', '09340957849687', 24, 70, 180, true, 'm', NULL);
INSERT INTO patients_basic_informations (id, name, family, email, mobile, trace_code, age, weight, stature, validation_info, sex, personal_code) VALUES (10, 'masoud', 'ghorbanzadeh', '', '09158955356', '09340957849687', 24, 70, 180, true, 'm', '0921777221');
INSERT INTO patients_basic_informations (id, name, family, email, mobile, trace_code, age, weight, stature, validation_info, sex, personal_code) VALUES (11, 'masoud', 'ghorbanzadeh', 'm.gh@linuxmail.org', '09158955356', '09340957849687', 24, 180, 180, true, 'm', '0921777221');
INSERT INTO patients_basic_informations (id, name, family, email, mobile, trace_code, age, weight, stature, validation_info, sex, personal_code) VALUES (12, 'masoud', 'ghorbanzadeh', 'm.gh@linuxmail.org', '09158955356', '09340957849687', 24, 180, 180, true, 'm', '0921777221');


--
-- TOC entry 2045 (class 0 OID 16442)
-- Dependencies: 182
-- Data for Name: patients_last_month_drugs; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2035 (class 0 OID 16384)
-- Dependencies: 172
-- Data for Name: patients_ppo_from_informations; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2038 (class 0 OID 16402)
-- Dependencies: 175
-- Data for Name: permission; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2075 (class 0 OID 0)
-- Dependencies: 176
-- Name: permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('permission_id_seq', 1, false);


--
-- TOC entry 1923 (class 2606 OID 16416)
-- Name: patient_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY patients_basic_informations
    ADD CONSTRAINT patient_pkey PRIMARY KEY (id);


--
-- TOC entry 1925 (class 2606 OID 16418)
-- Name: permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY permission
    ADD CONSTRAINT permission_pkey PRIMARY KEY (id);


--
-- TOC entry 2053 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-05-06 23:57:33 UTC

--
-- PostgreSQL database dump complete
--

