--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.0

-- Started on 2024-03-07 16:03:45

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4840 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16409)
-- Name: movie_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie_data (
    movie_id integer NOT NULL,
    movie_name character varying(100),
    movie_description text,
    movie_poster text,
    movie_actor character varying(100),
    movie_date date
);


ALTER TABLE public.movie_data OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16408)
-- Name: movie_data_movie_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movie_data_movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movie_data_movie_id_seq OWNER TO postgres;

--
-- TOC entry 4841 (class 0 OID 0)
-- Dependencies: 216
-- Name: movie_data_movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movie_data_movie_id_seq OWNED BY public.movie_data.movie_id;


--
-- TOC entry 4689 (class 2604 OID 16412)
-- Name: movie_data movie_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_data ALTER COLUMN movie_id SET DEFAULT nextval('public.movie_data_movie_id_seq'::regclass);


--
-- TOC entry 4834 (class 0 OID 16409)
-- Dependencies: 217
-- Data for Name: movie_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movie_data (movie_id, movie_name, movie_description, movie_poster, movie_actor, movie_date) FROM stdin;
134	DIVAMI	divami design labs	http://172.22.30.132:8089/images/1703830303024.png	DIVAMI	2200-12-26
119	RAJA	EMOTION	http://172.22.30.132:8089/images/1703675901570.png	VENKY	2001-12-25
120	BILLA	MASS	http://172.22.30.132:8089/images/1703675934830.png	PRABHAS	2207-06-13
121	BIMBISARA	ACTION	http://172.22.30.132:8089/images/1703676046219.png	KALYAN RAM	2022-08-05
136	SAINDHAV	ACTION	http://172.22.30.132:8089/images/1704344592097.png	VENKATESH	2024-01-13
126	KHAIDI NO 150	MASS and ACTION	http://172.22.30.132:8089/images/1703676205376.png	CHIRU	2017-08-01
122	CAPTAIN AMERICA	ACTION	http://172.22.30.132:8089/images/1703676077571.png	ROGERS	2001-08-05
123	GUNTUR KARAM	ACTION	http://172.22.30.132:8089/images/1703676104522.png	MAHESH BABU	2024-08-05
124	HERO	MASS	http://172.22.30.132:8089/images/1703676141474.png	ASHOK	2022-08-05
138	NA SAAMI RANGA	ACTION	http://172.22.30.132:8089/images/1704708397996.png	NAGARJUNA	2024-01-14
127	JAI LAVA KUSA	MASS,ACTION	http://172.22.30.132:8089/images/1703676236074.png	NTR	2017-09-17
128	KIRRAK PARTY	COMEDY	http://172.22.30.132:8089/images/1703676281347.png	NIKHIL	2018-03-16
129	MIRCHI	MASS	http://172.22.30.132:8089/images/1703676310651.png	PRABHAS	2013-03-16
130	NANAKU PREMATHO	EMOTION	http://172.22.30.132:8089/images/1703676351599.png	NTR	2016-01-16
131	REBEL	MASS	http://172.22.30.132:8089/images/1703676378016.png	PRABHAS	2008-01-16
132	GOUTHAM SSC	DRAMA,ACTION	http://172.22.30.132:8089/images/1703676414275.png	NAVADEEP	2001-01-16
133	THANDEL	MASS,ACTION	http://172.22.30.132:8089/images/1703676452306.png	NAGA CHAITANYA	2024-08-16
137	HANUMAN	ACTION	http://172.22.30.132:8089/images/1704708247977.png	TEJA SAJJA	2024-01-11
139	\N	\N	http://172.22.30.132:8089/images/1705580695802.png	\N	\N
140	\N	\N	http://172.22.30.132:8089/images/1705582386174.png	\N	\N
141	\N	\N	http://172.22.30.132:8089/images/1705582554505.png	\N	\N
142	\N	\N	http://172.22.30.132:8089/images/1705582592385.png	\N	\N
143	\N	\N	http://172.22.30.132:8089/images/1705583365943.png	\N	\N
144	\N	\N	http://172.22.30.132:8089/images/1705657966003.png	\N	\N
145	\N	\N	http://172.22.30.132:8089/images/1705666282895.png	\N	\N
146	\N	\N	http://172.22.30.132:8089/images/1705666687643.png	\N	\N
147	guntur karam	Telugu movie	http://172.22.30.132:8089/images/1707896033817.png	mahesh	2024-02-05
\.


--
-- TOC entry 4842 (class 0 OID 0)
-- Dependencies: 216
-- Name: movie_data_movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movie_data_movie_id_seq', 147, true);


-- Completed on 2024-03-07 16:03:45

--
-- PostgreSQL database dump complete
--

