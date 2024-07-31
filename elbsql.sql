PGDMP                      |            elb    15.7    16.3 u    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    49609    elb    DATABASE     v   CREATE DATABASE elb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE elb;
                postgres    false            �            1259    49610    master_categories    TABLE     m  CREATE TABLE public.master_categories (
    id integer NOT NULL,
    category character varying(255),
    slug character varying(255),
    parent_id integer,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    has_brand boolean DEFAULT false
);
 %   DROP TABLE public.master_categories;
       public         heap    postgres    false            �            1259    49617    category_master_id_seq    SEQUENCE     �   CREATE SEQUENCE public.category_master_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.category_master_id_seq;
       public          postgres    false    214            �           0    0    category_master_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.category_master_id_seq OWNED BY public.master_categories.id;
          public          postgres    false    215            �            1259    57998    customer_questions_answers    TABLE     5  CREATE TABLE public.customer_questions_answers (
    id integer NOT NULL,
    post_id bigint,
    created_by bigint,
    questions character varying(255),
    is_active boolean,
    is_publish integer,
    created timestamp without time zone DEFAULT now() NOT NULL,
    updated timestamp without time zone
);
 .   DROP TABLE public.customer_questions_answers;
       public         heap    postgres    false            �            1259    57997 !   customer_questions_answers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.customer_questions_answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.customer_questions_answers_id_seq;
       public          postgres    false    243            �           0    0 !   customer_questions_answers_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.customer_questions_answers_id_seq OWNED BY public.customer_questions_answers.id;
          public          postgres    false    242            �            1259    49618    details_posts    TABLE     �   CREATE TABLE public.details_posts (
    post_id integer,
    attr_id integer,
    attr_db_value integer,
    attr_entry character varying(255)
);
 !   DROP TABLE public.details_posts;
       public         heap    postgres    false            �            1259    49815    image_posts    TABLE     �   CREATE TABLE public.image_posts (
    id integer NOT NULL,
    post_id integer,
    image_path text,
    weight integer,
    is_cover boolean DEFAULT false,
    is_active boolean DEFAULT true
);
    DROP TABLE public.image_posts;
       public         heap    postgres    false            �            1259    49814    image_posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.image_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.image_posts_id_seq;
       public          postgres    false    239            �           0    0    image_posts_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.image_posts_id_seq OWNED BY public.image_posts.id;
          public          postgres    false    238            �            1259    49805    images_banner    TABLE     �   CREATE TABLE public.images_banner (
    id integer NOT NULL,
    category_id integer,
    banner_path text,
    weight integer,
    is_active boolean DEFAULT true
);
 !   DROP TABLE public.images_banner;
       public         heap    postgres    false            �            1259    49804    images_banner_id_seq    SEQUENCE     �   CREATE SEQUENCE public.images_banner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.images_banner_id_seq;
       public          postgres    false    237            �           0    0    images_banner_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.images_banner_id_seq OWNED BY public.images_banner.id;
          public          postgres    false    236            �            1259    49627    master_brands    TABLE     >  CREATE TABLE public.master_brands (
    id integer NOT NULL,
    brand character varying(255),
    slug character varying(255),
    cat_id integer,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);
 !   DROP TABLE public.master_brands;
       public         heap    postgres    false            �            1259    49633    master_brands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.master_brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.master_brands_id_seq;
       public          postgres    false    217            �           0    0    master_brands_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.master_brands_id_seq OWNED BY public.master_brands.id;
          public          postgres    false    218            �            1259    49634    master_form_field_options    TABLE     S  CREATE TABLE public.master_form_field_options (
    id integer NOT NULL,
    field_id integer,
    option_value character varying(255),
    slug character varying(255),
    is_active boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);
 -   DROP TABLE public.master_form_field_options;
       public         heap    postgres    false            �            1259    49640     master_form_field_options_id_seq    SEQUENCE     �   CREATE SEQUENCE public.master_form_field_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.master_form_field_options_id_seq;
       public          postgres    false    219            �           0    0     master_form_field_options_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.master_form_field_options_id_seq OWNED BY public.master_form_field_options.id;
          public          postgres    false    220            �            1259    49641    master_form_fields    TABLE     �  CREATE TABLE public.master_form_fields (
    id integer NOT NULL,
    cat_id integer,
    field_label character varying(255),
    field_type character varying(255),
    is_required boolean DEFAULT false,
    disp_order smallint,
    is_active boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    data_type character varying(255),
    field_name character varying(255)
);
 &   DROP TABLE public.master_form_fields;
       public         heap    postgres    false            �            1259    49648    master_form_fields_id_seq    SEQUENCE     �   CREATE SEQUENCE public.master_form_fields_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.master_form_fields_id_seq;
       public          postgres    false    221            �           0    0    master_form_fields_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.master_form_fields_id_seq OWNED BY public.master_form_fields.id;
          public          postgres    false    222            �            1259    49649    master_locations    TABLE     �   CREATE TABLE public.master_locations (
    id integer NOT NULL,
    city character varying(255),
    state_code integer,
    state character varying(255),
    dist_code integer,
    is_active boolean DEFAULT true,
    slug character varying(255)
);
 $   DROP TABLE public.master_locations;
       public         heap    postgres    false            �            1259    49655    master_locations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.master_locations_id_seq
    AS integer
    START WITH 493
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.master_locations_id_seq;
       public          postgres    false    223            �           0    0    master_locations_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.master_locations_id_seq OWNED BY public.master_locations.id;
          public          postgres    false    224            �            1259    49656    master_make_models    TABLE     d  CREATE TABLE public.master_make_models (
    id integer NOT NULL,
    cat_id integer,
    brand_id integer,
    model_name character varying(255),
    model_slug character varying(255),
    is_active boolean DEFAULT true,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);
 &   DROP TABLE public.master_make_models;
       public         heap    postgres    false            �            1259    49662    master_make_models_id_seq    SEQUENCE     �   CREATE SEQUENCE public.master_make_models_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.master_make_models_id_seq;
       public          postgres    false    225            �           0    0    master_make_models_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.master_make_models_id_seq OWNED BY public.master_make_models.id;
          public          postgres    false    226            �            1259    49663    master_posts    TABLE     $  CREATE TABLE public.master_posts (
    id integer NOT NULL,
    user_id integer,
    title character varying(255),
    cat_id integer,
    subcat_id integer,
    description text,
    price numeric(12,2),
    slug character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    deleted_by integer,
    is_feature boolean DEFAULT false,
    is_active boolean DEFAULT true,
    location_id integer,
    address text,
    is_sold boolean DEFAULT false
);
     DROP TABLE public.master_posts;
       public         heap    postgres    false            �            1259    49669    master_users    TABLE     j  CREATE TABLE public.master_users (
    id integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    email character varying(255),
    mobile character varying(255),
    password character varying(255),
    social_type character varying(255),
    social_id character varying(255),
    profile_img character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone,
    uuid character varying(255),
    slug character varying(255),
    role_id integer,
    is_active boolean DEFAULT true
);
     DROP TABLE public.master_users;
       public         heap    postgres    false            �            1259    49675    password_reset_tokens    TABLE     �   CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    email_enc character varying(255) NOT NULL,
    token character varying(255),
    token_enc character varying(255),
    created_at timestamp without time zone
);
 )   DROP TABLE public.password_reset_tokens;
       public         heap    postgres    false            �            1259    49680    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public          postgres    false    227            �           0    0    posts_id_seq    SEQUENCE OWNED BY     D   ALTER SEQUENCE public.posts_id_seq OWNED BY public.master_posts.id;
          public          postgres    false    230            �            1259    57984    reviews_posts    TABLE        CREATE TABLE public.reviews_posts (
    id integer NOT NULL,
    post_id bigint,
    created_by bigint,
    reviews double precision,
    created timestamp without time zone DEFAULT now() NOT NULL,
    updated timestamp without time zone,
    is_active boolean,
    is_publish integer
);
 !   DROP TABLE public.reviews_posts;
       public         heap    postgres    false            �            1259    57983    reviews_posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reviews_posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.reviews_posts_id_seq;
       public          postgres    false    241            �           0    0    reviews_posts_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.reviews_posts_id_seq OWNED BY public.reviews_posts.id;
          public          postgres    false    240            �            1259    49681    role_master    TABLE     �   CREATE TABLE public.role_master (
    id integer NOT NULL,
    role character varying(255),
    is_active boolean DEFAULT true
);
    DROP TABLE public.role_master;
       public         heap    postgres    false            �            1259    49685    role_master_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_master_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.role_master_id_seq;
       public          postgres    false    231            �           0    0    role_master_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.role_master_id_seq OWNED BY public.role_master.id;
          public          postgres    false    232            �            1259    49686 	   site_urls    TABLE     �   CREATE TABLE public.site_urls (
    id integer NOT NULL,
    url character varying(255),
    "desc" character varying(255),
    access character varying(255),
    is_active boolean DEFAULT true
);
    DROP TABLE public.site_urls;
       public         heap    postgres    false            �            1259    49692    site_urls_id_seq    SEQUENCE     �   CREATE SEQUENCE public.site_urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.site_urls_id_seq;
       public          postgres    false    233            �           0    0    site_urls_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.site_urls_id_seq OWNED BY public.site_urls.id;
          public          postgres    false    234            �            1259    49693    user_master_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_master_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.user_master_id_seq;
       public          postgres    false    228            �           0    0    user_master_id_seq    SEQUENCE OWNED BY     J   ALTER SEQUENCE public.user_master_id_seq OWNED BY public.master_users.id;
          public          postgres    false    235            �           2604    58001    customer_questions_answers id    DEFAULT     �   ALTER TABLE ONLY public.customer_questions_answers ALTER COLUMN id SET DEFAULT nextval('public.customer_questions_answers_id_seq'::regclass);
 L   ALTER TABLE public.customer_questions_answers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    242    243    243            �           2604    49818    image_posts id    DEFAULT     p   ALTER TABLE ONLY public.image_posts ALTER COLUMN id SET DEFAULT nextval('public.image_posts_id_seq'::regclass);
 =   ALTER TABLE public.image_posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    239    239            �           2604    49808    images_banner id    DEFAULT     t   ALTER TABLE ONLY public.images_banner ALTER COLUMN id SET DEFAULT nextval('public.images_banner_id_seq'::regclass);
 ?   ALTER TABLE public.images_banner ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    237    237            �           2604    49694    master_brands id    DEFAULT     t   ALTER TABLE ONLY public.master_brands ALTER COLUMN id SET DEFAULT nextval('public.master_brands_id_seq'::regclass);
 ?   ALTER TABLE public.master_brands ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    49695    master_categories id    DEFAULT     z   ALTER TABLE ONLY public.master_categories ALTER COLUMN id SET DEFAULT nextval('public.category_master_id_seq'::regclass);
 C   ALTER TABLE public.master_categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    49696    master_form_field_options id    DEFAULT     �   ALTER TABLE ONLY public.master_form_field_options ALTER COLUMN id SET DEFAULT nextval('public.master_form_field_options_id_seq'::regclass);
 K   ALTER TABLE public.master_form_field_options ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    49697    master_form_fields id    DEFAULT     ~   ALTER TABLE ONLY public.master_form_fields ALTER COLUMN id SET DEFAULT nextval('public.master_form_fields_id_seq'::regclass);
 D   ALTER TABLE public.master_form_fields ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    49698    master_locations id    DEFAULT     z   ALTER TABLE ONLY public.master_locations ALTER COLUMN id SET DEFAULT nextval('public.master_locations_id_seq'::regclass);
 B   ALTER TABLE public.master_locations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �           2604    49699    master_make_models id    DEFAULT     ~   ALTER TABLE ONLY public.master_make_models ALTER COLUMN id SET DEFAULT nextval('public.master_make_models_id_seq'::regclass);
 D   ALTER TABLE public.master_make_models ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225            �           2604    49700    master_posts id    DEFAULT     k   ALTER TABLE ONLY public.master_posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 >   ALTER TABLE public.master_posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    227            �           2604    49701    master_users id    DEFAULT     q   ALTER TABLE ONLY public.master_users ALTER COLUMN id SET DEFAULT nextval('public.user_master_id_seq'::regclass);
 >   ALTER TABLE public.master_users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    228            �           2604    57987    reviews_posts id    DEFAULT     t   ALTER TABLE ONLY public.reviews_posts ALTER COLUMN id SET DEFAULT nextval('public.reviews_posts_id_seq'::regclass);
 ?   ALTER TABLE public.reviews_posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    241    241            �           2604    49702    role_master id    DEFAULT     p   ALTER TABLE ONLY public.role_master ALTER COLUMN id SET DEFAULT nextval('public.role_master_id_seq'::regclass);
 =   ALTER TABLE public.role_master ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231            �           2604    49703    site_urls id    DEFAULT     l   ALTER TABLE ONLY public.site_urls ALTER COLUMN id SET DEFAULT nextval('public.site_urls_id_seq'::regclass);
 ;   ALTER TABLE public.site_urls ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233            �          0    57998    customer_questions_answers 
   TABLE DATA           �   COPY public.customer_questions_answers (id, post_id, created_by, questions, is_active, is_publish, created, updated) FROM stdin;
    public          postgres    false    243   Q�       �          0    49618    details_posts 
   TABLE DATA           T   COPY public.details_posts (post_id, attr_id, attr_db_value, attr_entry) FROM stdin;
    public          postgres    false    216   n�       �          0    49815    image_posts 
   TABLE DATA           [   COPY public.image_posts (id, post_id, image_path, weight, is_cover, is_active) FROM stdin;
    public          postgres    false    239   �       �          0    49805    images_banner 
   TABLE DATA           X   COPY public.images_banner (id, category_id, banner_path, weight, is_active) FROM stdin;
    public          postgres    false    237   U�       �          0    49627    master_brands 
   TABLE DATA           o   COPY public.master_brands (id, brand, slug, cat_id, is_active, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    217   r�       �          0    49610    master_categories 
   TABLE DATA           �   COPY public.master_categories (id, category, slug, parent_id, is_active, created_at, updated_at, deleted_at, has_brand) FROM stdin;
    public          postgres    false    214   ��       �          0    49634    master_form_field_options 
   TABLE DATA           �   COPY public.master_form_field_options (id, field_id, option_value, slug, is_active, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    219   ��       �          0    49641    master_form_fields 
   TABLE DATA           �   COPY public.master_form_fields (id, cat_id, field_label, field_type, is_required, disp_order, is_active, created_at, updated_at, deleted_at, data_type, field_name) FROM stdin;
    public          postgres    false    221   U�       �          0    49649    master_locations 
   TABLE DATA           c   COPY public.master_locations (id, city, state_code, state, dist_code, is_active, slug) FROM stdin;
    public          postgres    false    223   �       �          0    49656    master_make_models 
   TABLE DATA           �   COPY public.master_make_models (id, cat_id, brand_id, model_name, model_slug, is_active, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    225   �       �          0    49663    master_posts 
   TABLE DATA           �   COPY public.master_posts (id, user_id, title, cat_id, subcat_id, description, price, slug, created_at, updated_at, deleted_at, deleted_by, is_feature, is_active, location_id, address, is_sold) FROM stdin;
    public          postgres    false    227   ��       �          0    49669    master_users 
   TABLE DATA           �   COPY public.master_users (id, first_name, last_name, email, mobile, password, social_type, social_id, profile_img, created_at, updated_at, deleted_at, uuid, slug, role_id, is_active) FROM stdin;
    public          postgres    false    228   8�       �          0    49675    password_reset_tokens 
   TABLE DATA           _   COPY public.password_reset_tokens (email, email_enc, token, token_enc, created_at) FROM stdin;
    public          postgres    false    229   ��       �          0    57984    reviews_posts 
   TABLE DATA           r   COPY public.reviews_posts (id, post_id, created_by, reviews, created, updated, is_active, is_publish) FROM stdin;
    public          postgres    false    241   ��       �          0    49681    role_master 
   TABLE DATA           :   COPY public.role_master (id, role, is_active) FROM stdin;
    public          postgres    false    231   ��       �          0    49686 	   site_urls 
   TABLE DATA           G   COPY public.site_urls (id, url, "desc", access, is_active) FROM stdin;
    public          postgres    false    233   ��       �           0    0    category_master_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.category_master_id_seq', 47, true);
          public          postgres    false    215            �           0    0 !   customer_questions_answers_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.customer_questions_answers_id_seq', 1, false);
          public          postgres    false    242            �           0    0    image_posts_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.image_posts_id_seq', 1, true);
          public          postgres    false    238            �           0    0    images_banner_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.images_banner_id_seq', 1, false);
          public          postgres    false    236            �           0    0    master_brands_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.master_brands_id_seq', 42, true);
          public          postgres    false    218            �           0    0     master_form_field_options_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.master_form_field_options_id_seq', 42, true);
          public          postgres    false    220            �           0    0    master_form_fields_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.master_form_fields_id_seq', 16, true);
          public          postgres    false    222            �           0    0    master_locations_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.master_locations_id_seq', 494, true);
          public          postgres    false    224            �           0    0    master_make_models_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.master_make_models_id_seq', 35, true);
          public          postgres    false    226            �           0    0    posts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.posts_id_seq', 16, true);
          public          postgres    false    230            �           0    0    reviews_posts_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.reviews_posts_id_seq', 1, false);
          public          postgres    false    240            �           0    0    role_master_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.role_master_id_seq', 4, true);
          public          postgres    false    232            �           0    0    site_urls_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.site_urls_id_seq', 5, true);
          public          postgres    false    234            �           0    0    user_master_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.user_master_id_seq', 154, true);
          public          postgres    false    235            �           2606    49813     images_banner banner_images_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.images_banner
    ADD CONSTRAINT banner_images_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.images_banner DROP CONSTRAINT banner_images_pkey;
       public            postgres    false    237            �           2606    49705 &   master_categories category_master_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.master_categories
    ADD CONSTRAINT category_master_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.master_categories DROP CONSTRAINT category_master_pkey;
       public            postgres    false    214            �           2606    58004 :   customer_questions_answers customer_questions_answers_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.customer_questions_answers
    ADD CONSTRAINT customer_questions_answers_pkey PRIMARY KEY (id);
 d   ALTER TABLE ONLY public.customer_questions_answers DROP CONSTRAINT customer_questions_answers_pkey;
       public            postgres    false    243            �           2606    49824    image_posts image_posts_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.image_posts
    ADD CONSTRAINT image_posts_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.image_posts DROP CONSTRAINT image_posts_pkey;
       public            postgres    false    239            �           2606    49707     master_brands master_brands_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.master_brands
    ADD CONSTRAINT master_brands_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.master_brands DROP CONSTRAINT master_brands_pkey;
       public            postgres    false    217            �           2606    49709 8   master_form_field_options master_form_field_options_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.master_form_field_options
    ADD CONSTRAINT master_form_field_options_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.master_form_field_options DROP CONSTRAINT master_form_field_options_pkey;
       public            postgres    false    219            �           2606    49711 *   master_form_fields master_form_fields_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.master_form_fields
    ADD CONSTRAINT master_form_fields_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.master_form_fields DROP CONSTRAINT master_form_fields_pkey;
       public            postgres    false    221            �           2606    49713 &   master_locations master_locations_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.master_locations
    ADD CONSTRAINT master_locations_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.master_locations DROP CONSTRAINT master_locations_pkey;
       public            postgres    false    223            �           2606    49715 *   master_make_models master_make_models_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.master_make_models
    ADD CONSTRAINT master_make_models_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.master_make_models DROP CONSTRAINT master_make_models_pkey;
       public            postgres    false    225            �           2606    49717 0   password_reset_tokens password_reset_tokens_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email_enc);
 Z   ALTER TABLE ONLY public.password_reset_tokens DROP CONSTRAINT password_reset_tokens_pkey;
       public            postgres    false    229            �           2606    49719    master_posts posts_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.master_posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.master_posts DROP CONSTRAINT posts_pkey;
       public            postgres    false    227            �           2606    57990     reviews_posts reviews_posts_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.reviews_posts
    ADD CONSTRAINT reviews_posts_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.reviews_posts DROP CONSTRAINT reviews_posts_pkey;
       public            postgres    false    241            �           2606    49721    role_master role_master_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.role_master
    ADD CONSTRAINT role_master_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.role_master DROP CONSTRAINT role_master_pkey;
       public            postgres    false    231            �           2606    49723    site_urls site_urls_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.site_urls
    ADD CONSTRAINT site_urls_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.site_urls DROP CONSTRAINT site_urls_pkey;
       public            postgres    false    233            �           2606    49725    master_users user_master_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.master_users
    ADD CONSTRAINT user_master_pkey PRIMARY KEY (id);
 G   ALTER TABLE ONLY public.master_users DROP CONSTRAINT user_master_pkey;
       public            postgres    false    228            �           2606    49726    master_make_models brand_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_make_models
    ADD CONSTRAINT brand_id FOREIGN KEY (brand_id) REFERENCES public.master_brands(id) ON UPDATE SET NULL ON DELETE SET NULL NOT VALID;
 E   ALTER TABLE ONLY public.master_make_models DROP CONSTRAINT brand_id;
       public          postgres    false    217    3282    225            �           2606    49731    master_brands cat_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_brands
    ADD CONSTRAINT cat_id FOREIGN KEY (cat_id) REFERENCES public.master_categories(id) ON UPDATE SET NULL ON DELETE SET NULL;
 >   ALTER TABLE ONLY public.master_brands DROP CONSTRAINT cat_id;
       public          postgres    false    214    217    3280            �           2606    49736    master_posts cat_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_posts
    ADD CONSTRAINT cat_id FOREIGN KEY (cat_id) REFERENCES public.master_categories(id) ON UPDATE SET NULL ON DELETE SET NULL;
 =   ALTER TABLE ONLY public.master_posts DROP CONSTRAINT cat_id;
       public          postgres    false    214    3280    227            �           2606    49741    master_make_models category_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_make_models
    ADD CONSTRAINT category_id FOREIGN KEY (cat_id) REFERENCES public.master_categories(id) ON UPDATE SET NULL ON DELETE SET NULL NOT VALID;
 H   ALTER TABLE ONLY public.master_make_models DROP CONSTRAINT category_id;
       public          postgres    false    225    3280    214            �           2606    49746    master_posts deleted_by    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_posts
    ADD CONSTRAINT deleted_by FOREIGN KEY (deleted_by) REFERENCES public.master_users(id);
 A   ALTER TABLE ONLY public.master_posts DROP CONSTRAINT deleted_by;
       public          postgres    false    228    227    3294            �           2606    49751 "   master_form_field_options field_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_form_field_options
    ADD CONSTRAINT field_id FOREIGN KEY (field_id) REFERENCES public.master_form_fields(id) ON UPDATE SET NULL ON DELETE SET NULL;
 L   ALTER TABLE ONLY public.master_form_field_options DROP CONSTRAINT field_id;
       public          postgres    false    221    219    3286            �           2606    49756    details_posts post_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.details_posts
    ADD CONSTRAINT post_id FOREIGN KEY (post_id) REFERENCES public.master_posts(id) ON UPDATE CASCADE ON DELETE CASCADE;
 ?   ALTER TABLE ONLY public.details_posts DROP CONSTRAINT post_id;
       public          postgres    false    216    227    3292            �           2606    49766    master_users role_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_users
    ADD CONSTRAINT role_id FOREIGN KEY (role_id) REFERENCES public.role_master(id) ON UPDATE SET NULL ON DELETE SET NULL NOT VALID;
 >   ALTER TABLE ONLY public.master_users DROP CONSTRAINT role_id;
       public          postgres    false    231    228    3298            �           2606    49771    master_posts subcat_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_posts
    ADD CONSTRAINT subcat_id FOREIGN KEY (subcat_id) REFERENCES public.master_categories(id) ON UPDATE SET NULL ON DELETE SET NULL;
 @   ALTER TABLE ONLY public.master_posts DROP CONSTRAINT subcat_id;
       public          postgres    false    227    214    3280            �           2606    49776    master_posts user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.master_posts
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.master_users(id) ON UPDATE SET NULL ON DELETE SET NULL;
 >   ALTER TABLE ONLY public.master_posts DROP CONSTRAINT user_id;
       public          postgres    false    228    3294    227            �      x������ � �      �   �   x�=���0C�b�N�g�v�%:A�����$�p(���L��Kǂou�V��NZ��nաg)�A��&�&�U��سp�rn���WY�ZR���pN��IS���rj�齃�UYF�ι)�s���?�0+�      �   ?   x�3�44�,-��OL)�/�/.)�7472476�00727��MLO-�+�K���,�,����� �6#      �      x������ � �      �     x�u�Ms�0���_��7:H��ܜ��3�=�:���"ۊM�8��}��'��"�3�+k��@�N���iy[���bsh�4��'����,b����Qx~ y@9���4��A(Qs���b�֕�w��w��3��!,sQ����"T�lϲ��Aڈ�a�����yQ)P6�tL'Y�������v6�4��j�Na�ۼR\��.0��\�en�J]�1a����fI ��p<CA��́;}U��#9�w9ӵ��esVh�'IF�.�ՌEK�)E�z��������~c��چu�4c�B�B}�Zxۋ�SH	���ۋ�7
n�4c���t����s�4���,>����ax�������c���q�mLXqu���qN���K^nE-��C���0V�ӌ���:��܃E���jƀ�. �C$��øX',��4c��*r��	�@�2ß���Am���q�������v$���f�MYL�Ȟ��ɘnϺ�=�An<F:&�:F��;���ak#A�F&rx��:��J�9m��)�<��Bp�M�M��ٛ��u�������Vy{�E���/a�tt�V3���)� �-�f�ڽ@q���c�Nx����m!���3�;���B�r%�wJ����/*:)��v�1=
U�Q�Yh�~U�Y@����v��o��`B�W���_^�#��{�e"��vb��'ox�Cq]L� ��Ƣ�����mX�\$�Vg�2J{�+7��)<���h�	���7�F_��f����d�      �   e  x�}��n�0���Щ���Ŷn��i��@.��2m�E����;)ۑ�������M�.�wi`�]�~����9�<���"NH���n���Z5ue�/�E�n벩�&�/Xy�)'Y�Ƥ���v����aE���:�	�r��Z�Vwr���}�dFj*�4�Z5�
wzg� 5��{�4��.H�l�q\��y�.�z7_��Vi�Nx��ڝ���t2�q�����4�a�=x�C
0'5�����U��c�~'k`�5V�h4|��^��9�����׭�@8�<46MH��&1<k�Jm]���r?,�i���Qn��~�F
���H�-����+����ȽĎ9��m��͊����&N��lT�=�V�k��'�^0d�'���K�w��Kcá�]��{�8����<6�G���h�w"ޙ�z�yH�(�V���O�DJj,�p�v2��F��B6�A�-���^M�$�Gj-��n���ۨ�2z�rg@9�ѩ���3��g�ѴJW+���L7u�OcJpá!섧�R)e�6`���l��p�a��ZF�Ƒ��̯i���01�)\�]�w{���([�eU��mP����ƊC�ΝG���I]v`ٸz��������� �8�}1�	:����h�avZ�#|��ϵ*��Y<�(��ŕ+�sƉ �������֬�ǲ�;n��l�g��1V�|�A��f�m1a��^�3�P�$ f�E�JL�u��I��[�5��.�C��0���jC�����.|>�"�b
���Vb��p?3�H��4=i��N����ٺ���X�9�yl�����`�ݞ�"��,�W��Sg�Z/i>6�
��Zg��m2��1���      �   G  x��ұj�0������I�#�Mi��%�.Y��4��6� ��{�ӡ�h��ߏ�	6O�]����W� ��#;��H��D�	�Z�V��l�I�8k]�CYC1�8/�?�����ʟK\�ꞏ3��gK��q�8���}1V�\���+N�8���$	�!�R4V	K&8�Y�v�$��?4CJ���̐��?�`�!�nݾ��]x�j�y�b�'�o�V��k� f��--?�Ќ�^/���������s�HPV���''��;��y	��m�X���P>��
�PKx���=�ij�<	��7�yO�]]9�3J�I�|��*�      �   �  x���[K�0���S�Q&��k���xA_�P�t��f���o�I;��٦P��o�;��������:ԡ�k�1�Ĉ�#*0�J���e��ǌ*��e�j�^�,�vG����1�ݮ�J2�ID͗j㴫�띠�_^�So�L���ٓ�[h���A3��<��W�K�reX������\�ܽ� �\	�X�"� }�x����'��lg<�'ż(m��Y�+�E��Pa�.צ.���y�#x�~17;%d4
t��w�[�JӶ:n>�-�[�q�e�,�E�+\�v����F�~E��Y���b�����B�4x��gumKk�r����h6ȦǴYaZ�$c�2�Ͷ���HC�����[kQp�����@o��yc��m�tr���c�7*d�2E��G�ޛ둶��NB���$���D�      �      x��\�rۺ�3_�љe�DR�!�ؖ�HqI�w�Ԟ�&#¢H�����ِH��d,ᱺ��� �N��2K��h��s��.��7�g4qJ�����;t.�(M�8������:�zp�����or���O�r��*X�`��m�5���܋�]$g��W�V���u�9Q�I�W�;w��f�e��f�L��)�E�i8���׿u��9�k��Ok���Lē��9��j�	����z�p�)�*?D��йC7����׈1Y*m}�:&N�y)1 w���̃W��-s�a�6���vtE�L�wn/c^7�b/̥��4:���ݮn��s��Y�_�~=s6�]��a�z�#0yx�b�;G���d2Z_g�F�1iH}���0&��k���u�כ�8�Y��Db���(����$q͔1��^p� �Y-�6ᰴ�3wl<j�m[X#�!F
����m._�\*K�Fx�����\�r�v���M�Y�|�}4�t��1o�47_c3� Q"[^5j�ߠU�Eks�O���,��m�$�k����Λ�{C�X6+47N�HoT���p\�.X��,�����5���y.�9���+�hQ7��B�EF�ߎf� �E���ɇHk?�F��<��r)?�Czsޤ��!�Â�7�'��hw�ɰ͝&����|L+#K�r�H5%����kC����z'�gC��B����a�q4�<�r!�-k�>�1@2� i�]�yF����i��t@����n��3%L"m��������5o ��}�1Q��i���1�qZ��5�顢#�;P�Qcb9-��\Z@͚ƾ��	���0����5�4�ԭ�1������j�LA��\qc�1q��a,�4����y$����� "7��ǆ34�����us�5O�W���{yE"6/b3�2wb����t/�oA��]͸�b"�lϔL���T�tjl,?��0�4�E��h_!�S"v���� 1J��:v� �ܥ�D��v���,e+�rۘ�*_j��j��䙽)�A�����~���Ӧ�9�Zh���jLT��|�ai:'ԾI	O44ͳ!5'�bp����e>�'��Y_�?�\]�X���f#��T����8��U��b��	�F�y�\�
۶g�O�7��Ύ�f�3�#���u���
����D-��Ӆ��,�5�k1#C�#�`oM�9]%kHu�&o d
��N?K6��ih5f�`d�Xj��٫����9��zi�7� 2bY�zi�i"����|�Ɔ楙�9L�Y��ܳ��g�
gd��8�|ʘb���s���|���/M�p>��C���3�� �F�i�5%գ��� �l�-�(Q�gG5�G���5C���G�����7+;���4�H��jU����U(��r���+�' 0�l�ӄ@t�v���:
,�ϥ5X��' `њG�7�L��E��<Ry�̓�F�*��	w#�N���L��q�
���lC�)T���9��3��֘ܚ��4M3��歔�}�Dc��6��e��Y6�Ԥ��JNS ���%i$�)G�*�C���K|b$_��y.�*˼N��}2��D�J�v˭���5*��b�yu��*��ݰ1��L�����P�lB8�e�"��4@_V��s��֫��O{uNt�NC<@�$�#V���iv%�Yl��ޓ�cW"�#��P�
��_d"ӽ�	4��V?���
�vSDܴ-�G�;WQT����E�!c�	D�q�т��u�d� 牚�Ңy�%$q���4�c��溊��*��v�hL��U8!� �m2j�1�-zW��<fy�Bl]�:�>���eN���܂���#�Ubd]�n譫�J"��e �S>�U#�1|wur'h�+Y�)d�u 79����LU�ZB���_��zcB!XR���Ez$�������\W����z�¦`�`��:Q��?mAq]��D��B|Z��P]�y�G��.�E�Oy��]@��0�����[�`{-O�eT.���YANw3!@^TU��su���(��^X���S0{�S�$g��2�z&��%����κu�X�����P�-]��'
t��֘£-A��S1�T�A�,��w��ů!4�:�k��X(;{7u�l��yP�8�C����SZ��h�̹����;�C��M�y;��C���hbr���n2k�f�1ZNA��0l@H9j�f�[�cH��
��Pc=a��Gp�|�����rb�Ǟ��ܴ��S]gҶ^m[H��*�oTW��60t�M�<	3�q9�@��T��\��Z��2�/�?T��%cmtȺ
�$,Δ!�lȹ�
���2r��9$��̬�%�T�B<}!�Gv�"۵��$fhMB[5������ZKQ��,����xH�������.��B�Ց�ܭ��1.0�my:{p�T����Ŝ}�y�Y$ũ�0VU��,�o!��tQP���`C�EY��t���Cb�D�(,>�"�q��'�kh���!T��:5T�r��^��V�E��p]9����<���E�Hwz�">�2��FC�
*Ť ��3�kAc���Z X�����E����ƽ��w��+dߡfR�',w,<i���oT�~��^y����ט�NV���V:� �6����z8Ϲ�I��<������Ofa'B�Cs��ts6�#Ⱦ;!����)کѾ�̨֣��p����I-'��U E��*�J�9n�f�t���|�l�s���#n��*&��G��8
�[v͉G�+���#Z�ԞS03Pzw�M��T�]���k�2���w���Ћ�bⱙ!���*}��n���j�'_�b�ۘ^�^�Ԝ��p�#��z�� 
!����O0� ��Q���	P�K�d����� �{UK�JO�����?�%迥H��(/tZ�P�
��/�.2���;�������q�v.��P���z3��
E㦦kOK�1�K�o�5����s�1�cb��I�b�czND=�C�f_��[Im<H�%Tɱ�f@�\�QEΚ\��c�,=���o|j���zc����Pa}��c|HC���~60�Ђ�8�����q���rj=H��6����x����\�¥�x2�朗�q����>�w�LY��A���G�����1p!�[+��8��(Q��dG� qY�$̓���2+�wRL+��2���.6�xtȻeҾ[k�;H�e�X�
���$�t�R3��4
�� �	��O]�<@�,�+;? ��ztVu�}iP��!�~����m=�C=Q�s`���!��-��z� ��#�"n%@M"_E��ݕp��^E�ju�Emr��Mi��^
���C�Eg�!�VT��<[dʡ�V"~��z�^�Q��8;��;��T{ܼ���Iw3L��b��<h��H"k��'�7)P~���#~r4$ڑ[���vi�)H!�0[��
�a\m豈kz���r��p�0YO����2���#��אx�ԓ���a����v�T~u|x�(�moX� ��9��&��`yX���}eϢ��!?)�*����^��r3cM�W0Erѯg�{��3۟���=���-�)�2jJ��^����fz����۫L��g(M+<`U��F�N�X.?����}��{ yU���&W<�x���� ~U��]3ҳS��Vէ����/+�zi��ԃ��@�Ga�)z����ټ���c��O�"���r޲P|�r�w�{鶑jC�.��d��!L8C��B�5	`k�`���m8L��I�v�ՠ1�lه~�9B~�<Ⱥ5�r]���xы]��������B^c��n@�P�>z
�F���$��;a��1�>�N��r������� ���Ǆ?n=Ϳ�[�6������M��o�ڽ�w��P��(:��L�3Ђ�(iNs�Q.h���E�9��>��f�]�)X�����y�B
��,�A	���Ι??� k���<H8�y��4Ѓ?����qB�gq��F׌�����3�u�ŏ��.כͯs�(C��)�fJ���y�b\s{8m��}$�,B�5�gt�	5�E�P���3g8��� �  ��G�W�Z�.x�@�5����8b��fR�	�U���
^ǔ�*сzc�}��M��Rv�|��Sb�L�/�tx�|�G��KK�������������s�n�ޙSpJu�cOT�-��{�uiح�iĔ��"���1�u�
փ�ַ�?/0��-ݫoOT��<C�s�sZ�Bę(�7�v�6$����t���2��R�k&��^��g�\�ЃhK幁x�A��Jԭ`�A����Q8Q�0#�t��^����,���ߪR�L�5sN!�#�5fN{�M�/">Vi����=HB�B�!G6���e�S��o���qz���3ǄD+}w�H��24��������uDfN�����]ֲ��
vIφ��RUAhK=12A*��45��5^��
d�7N1$�KU�����eƐ���C�t���(sD#���
��n�_F��O��.5f��U>����i_��&�eۊ����&{�򲀥��+Ww�3��Ck �[Ax�a9Q���7?j��G}������_\�;�s�,�mST0Ya�bЭ���^��_��5�h=yӓ�5��-ǌ 9ڊ��������v��dް�-��#��_���v��e�+_څ7�{b��ܣ�����nq��fv��7�%�K�H�����;N*e���H�����:��(�ed��F�����䍋�m#��J�����s��E�=����¦ �h=`��ʬ=_Nr.�f������0�����/���G%����*��(��pK�e��Xv/��@��e1�-=x��);2$�V&����~��� ���P�>��V��\T�u&��
x�jC�E^0�V��,XA���[���|Ks�Ѐ����_���~8ͺ�.;�F��$>�6��|��9!$W���3���t�b��`{Cn���hz��/�g�z�y�����Cn�\�N�|�B�F�X���U�y���Cw��C��oC�aDEmxU}����4���?��	}��h�/�|��]�*��_�!w�l���8T�Ϋ6t�N�X�,�.�:��2��tZ����w�������ޙ��C1��\��/k�_I��
�Ы�ޘ�YI�4Jl5�1@]�~��{7�C`*ܫ�m��`u�0ot�y��E� 6�E~�~�Cn�I��Bه��e顣�yJP���x0�K^?��Chy�����r}WN>��CX����j!6^^�L���P�I,��?n��;���<V�8s`���5-���1�Y	O�|2��!:�"�B�}~�;�����z,���Q}qk{D2a��|DJ$�t{̟T�����5��!9#����R㴨��(C�X�f2zVS�^ ����Fԇ�|��8Ģ��ay?A>�OY䞣�'
��P_�[k�lhP������ ?	�Y�D6^u������ӣ�3?̠<wQQv���5�K4|���o߾�?��:      �   �  x����n�0�3�zI��6=:	� �\�Z����F�<}9#)^8:�b�s�L��@aT���W/�]����x}��4�zGe�u�X&lZ��������I։���Fu�ko���B�Q�e�M��kY�$����Bc�F��^�±	�X�N8;vb��űRS����䋈��A��
�Z�h�j{��B	���F�?&�����I�	�T��G�۴��F���v�j�ԣ�������:m}����yb���5P�?kZ|��-~)�dP���$�-9Y� �脙+)�I�V!ava���+	����)XX��5�x�l�*��5}
��=�S�<ְa�q��
�7O��~ݱs��劤�F�jg��
r����SM2V��� �8�E�\#��0�`Hk��c ��h�F6�#(8q4�O[Nd�s�8a>n��ͥCq�3�����-�'G�&
g3�g��C��#��� �范�3��
�5�r�[������)n�|����f����Z���}ns�a�+扐����{S}�w�����ܟC��k���66#������E�ynOb2|z��
y7|� �	��6�Hp�Bd!ʂ/R���.޲�߲Zz��Y������ӛ��j4�|�/p��V�C�U���S_�Pڰ�)ڔh�����b���      �   �  x�}V�r�:}v�b_nn;1��$�F�2!�)�i��E�"�bKI�~�ݕ!!��3��j�٣�Q$��J�a���]I�l�A��+i?��Jm]�ð�A�[��~IwXx���~�����	}���?�Dq���.ED� ���p��\��� I��n�5��A�s���k�塀�(�kT
1�����!���y?Jcǰm�������v/��o���,����ׁ8���~���!�x���o�u�v�9	Zޑ�!$@��qךbǨ�{�N7蜿�*�V�`'I��Au�L��c�n<���zd��~���nc��`F_.��@���x�߂T�ͣ�g �����b���q�qS�wΦ@?	�\���xc^:]���7��k��<gy� �pd߉p;��;LfJ�5>��4��>�&�uͻ)�&;:��C8M�ɮ���d���8Ȩ|;�Yn�5�)	!��_q��'������;cmD��Vѱ�(�-dUQl��/z	8P����ܶV8�[����l[pXj�-,�P~�>�o��p=7�!�@�X��g�	�lV��+��Z鍪	�dj�F՞y���g�d<+�^,r��t���K�m)RY`�.o��y��2/��ԃV��B*����bQ9�՞Y.x��`i����dz��� \*�EX�U$��b銫g�y`�,��ʹ����"E�nha#���4�Ѵ��X8���Jg��v(����Z�L�I��`j����k�'(�E.�C���p����A���X�L��Ҽ�(��Aje=�7������.ȳ[�3f"��C�}pj��w��X��tɽ�[����%��H@L�Ep���(3�t�W�,a��N/d.������:7�E�GY�tQr'�-�����J+q3^�
�=���*3Zf����>׶�9vD���K�K�?�Cz#��[���ܣn7�2��i�%m��<(I"�n�,��qU���<�����uG~����Ձ�G-�@=�Oq�~�
��P{_���)��:�_�>|�b��xD5N��짮�;Ai��f���S.�.ſP�R)l�Ĭ)a��φ�+
?�4:o÷��Q���5�M�l��n��f+�s���x����U�%1�"�F�׏+ڍ[!JRc�ſ�t��I�9Nݨ@�{�~���{��.'�L�;*�՚~�z�2�0�&�{xͿz����������l6��Do�+!:��N�eJ�-�`2�����|2��G��t��G��3�ipGj)�D�j�-�9�gUY���N�h��O	��t�򪐪*����K���ƍ��qc1��El-�`s��h��K�-��Y�Ub9Y���9?l�K4}6���dI~a��5��p1^Oھ�%c1��v��	D����O.c�7�S����ȣ�      �      x��|ɒ㸒����ŭ)�Z�y�C�=�4�%J)q����AEƐ}�=UUfEEFE����qw�8ڴ�2m&��k�4��PĿ3oF�Lm�?w�K�K�ڿg���6�-�_7����7r��2��:�-������%e�#[J�>��ik_!�Ϊ����Y�-��[G�?Ï���n:��Y�	�7����ԗ2x&3uD,�c�]X������ܦi)�ҳ'(K���P�q�Q�-�� �&#?���S �@���K��'L�����ܶɯ�E���L�u�=GI����y��Ο��|ϋ���y����^-vo6�ݝ콄RH�r[�8�1�α��� a��8�&$���V8�V��Lho�]����2
sa$^������(�-�Y��Mj�Ax:�r{�lݟ�o�6�P�^Pk�4�Fm��Z��ַ�� ��>N�W�B�bIՑi2K�t���;��[�,M(0�[�)��!U���f�1��LsS�"6v�Ur�-Yml�؆�i���S��?L{f�ר
{��Ŭ�3vF�l��j2�w��6���e��]8����%�6&>宩���w90-�C�z�$Ax��2G�>� ��ڻ�=���]t�vi#��4ɾŏrd0��D�׍0��<�N��A��7����~�����1?�f�JǙV��W;5��lmZ�Ǘ@�m:8��.G3���۞�l���� 9D�(<���
�ci�P�B���p`ݻ��A��!Z:��� ��$��Ԥ+媲޼m�۸�?I��ѣ�Ȉٹ��S"��mo�����k�p��^��`�JI����1a��2�uۦ��g��i�B��h�0"�.�$��6߅2��$�;��Q�����Z�n����;4L��Q�ݝW�l�,�w�8O�����C�9"o'Vwx��9������(���Tg�wuۗȄ���/4�	D�K %:�-�*�=��� ��L���0Kw�����qjچ�-�SF�C� =�mq�;�����N:{��\܋b�<m㷸aԆN�+�2vK�S�z(1�/�}d�8������ٌ�3}��0�OLe��+�Lj}Y@]<HM���~b@B��7�q,n0�
G���l�_ϼ�wɦ�ޫ_��}`�߻997�&�˖T�fzy�G2������p�i8��quA�7��´	��
��AR�s�^x����$!��]�P1�E�?��|/��|���,:6��W�i�ǝá5�x�d�ݺ2�IU������g�w�Oo�y�a;�����5�����L'�t�T)��ű�w��p���IߕxJ�P��HJH�"�&�ǻ����-SwL�Q<�����[}�l�M�p��f��,�Fv.�ڶtz���-d�:.ϗ�uq�xu~	�呀
8�v�*�`~!�����<��,A �*�!d�>��E�����Jm'5ȷd12��'吞�4�*|�e}"���ﲷ�OO�b9��ab����K�g��bp1�˜9�
�u�^�/C�pu�cU=�s	�C� I�MY� �~T�@�*�ȵ��!��<���<�E|$\�U��$���8�e�
��ƙm��.{7g_[m��dfU��X���-�,��z�d�6N=7C�m�v�
=�/&@��nZ����-�/���![A�xZ����`�0��@�MB��"z�� _������l:@��	E���m9��u�ݠX�U|ã�əU6�h�u_m��4w�o��C�D{s�F�iF��1h�h�<Wg���g�O��y, i^�ѷ�hT&S8V)�6͞�������>I&�o��U
^�I,6�|��	C�U�ƴ~|7.��u�6�{BѸ�6����7����vY8_y�9?�ZOH�}t�>�W ��AP�!�<�{@�%(=}�RiJt ��u?�}��v��MǱt(X���O�*�v=Y�;?�gF�+�����k��pW��
��M�1�O��ȜlP�0^KYLB.�OB�|���t�[>�+�<�? �H�(s�9e��a���/�{������o��F>���V�d8��.��ݑ�lZm��h%���NZx����>�&���4�3q`i{p�  -l�k���UxP]��g�0D$�A��������F���c�ME�� -8stN!� �O��0f��;ҚF�
�X�Q�����o�b;)�-��ᤝl{~����4A��>��p�p�t�C �ca��#|J �OX�P����,�F�"���"�wI��oW��QN�N�rm�q��|����-m/o5g.�\$ӷ@>&�͌�ѫ��ƴ���������a�:2+�X2E6 a�僀f$�� ��2=� T�����!O�:y�N�w�~KUF�ALn��l�}V�)�^φ-xܿ1)�����%������p��U�-����ٯUI$XE��$@	G.X[�2-�\��Т�<��|J��L�$֚"MU��]@A�P6�T�"?$��~Ck[�@�;�P����*�٤Q&»�O�����R�jԗ}<��}һw���l�m�s��	�|-g	�lp��#�T�@�*a怶�8�h��|����2��O,@幠	�-�jd�2����� <�J�Q��?���t�.��y����p������x�+3<��#���c����|]d����_����6�Rw]d���l E\H�B#GsKD ��g�r�Z
��<�y.��H���q���(�0^`���S�~}eo�u_�ڣST�l|owj���aK3鑉��.A��ΰ8�c�	v�Z�2նK�s�s�0!i�Nl�Rj��@�?P��/D�������6��Z�^�RCC��|�<̲����Q�(���o�����/�6�V�+�Q�����Z|}����r\uv3~�����Zκ��C������Й��:D1��m�(
��=���,m���"Uh���3��|�&$h:�*$&�l~8~�~O��f�`P�خþ4ȱ��7~��ߋ�@��A������ÌC� M%�� W�1 ���v��r��ȟP�Yd6�<�y�0V��A�%�4�������&����G��"��r�N�q��\t\����8��ˑ(��<i�*����V�x���}T��vJ^�%�)M�y$� �.�0��+x0��&H�g0�HmmZ�;	�$�-�uPnB�T�NG?��D9�/�sN3rJNt4�;P+�Iܐ�fѨI��������R\,��[�O��^�H1���C��Ա�q���.05�eanj�F��2W�ָ�ѪGP�E����]�bP�1��C�RnY��5�z�n9�e�9�sR��b�.�͠����`�K3�tϭê��k�a�5=`2��c��t�j��{ངI0�X>���C�*J��v�]U�~쳅�M���ne6�m��7��q �?���-Ix��A�������G�,[U�Q��=U����F
̧���_�ke�p�#W\x��n����9�>�ھ��G�4����TYjoJ�i�P�Z`�^+�B�MK'�~����&��p��U7{F��ёa��x?u-�?����":4���r��k�i�6�(r�p��Q5� �>u$q#L;� �R�>�����r2�'�0Jו?�1�B��_P�N��j��z��X6��^ͼc�6����ɍZ?�U���I���[���g���DJ��пM^�c2l۞n��?��Tu=��XX�4�R�y%=(���‗�g���7��r�*&R�Џ�! �Y9́j�8����4�b8}[�{��\��~T��"��m2����ͺ8D��)`�0��ѝ�^�&����AMlc[��� ��T;<AE��<��ԽC�F�w ѮFW	&�k��_��q�g�
-w3���#�گjo�zm�u��|�Ȅs�uN+���6�:��9p=�����������F���g@��HJpL���Vu�$���ܖ�e5���?Ǐ��~q�7qT�ܲ?����2W���������ǢVLZ�Ӽ�k7�����<ł�+�T�6�r�K�Dj�B)�.�	��PA��ࣱ��Y�.!�> ����꯸�O����ŐQ$�a¹V��[?�>͖t�    �x\�y.m#<��x��I����cqX�������_��c�+^�+�(�e��2�`��gWN�*%��k��Z_�B�O,r� 1-��DIT���է ��]��8
E�-������efj�ju-���������N��[t���qj`I��m�)���jJ�q]+ {�dDO$z�DŐ[Z7�{�k$�r��)�lxi��v  ~HqLT���?5?SvN�����n�^��q|w���8]:�k|X�.+�}��mc�-É7����z���%�= J\�Q��-���80�^�ү@�P�)x[�K?"�s(�j9 g����d�m+L(P�����}[�̪�_��j����Ǎ��>��p��f�l�6�VƱy$�kq5U��%�s@��e�!o=�ӥ�	�/�`�P������e��]�J��a%1�IAWsW�[弎~��w�S�?�� drھ���;Wfzc�J+Z�
o���Pĳa���ל#�c �� �1׹�9��l��*�+$�D��n�
乶�4��B4sI�N��q�Z��;s�����I��J�b2�>j̺�'��/�St��+�0�me�~_ۯb��c�6�#�J�E�(w逞������_�PJ�!��8�p4�aVDj;E������T`����A_�s��m#꬚n�1�77w��M/�zF��{�|���5۝��=zM�A��t�@����ºŤ� ��t}��O0z�F��h��W�e��`9��w$�-�?�"a�?�r�f��崟������f��2��v���$;~�L������vm�g�w�&��RJ��3u(����r����&]��g�֓2�wm���!��(���[߇ &5(ƆI�'�ַDC�ި���a/�7�<�#�8��h�6{����*�S�[����5:e��<�9�4����� ə�E�]qJz�EyK�#b50W+�]f��ڳb t����|���;V��[�_����ys2���Hz��E�>o�'v�hny^Y0�[��Zuߵ1cz@�Zw}e�L#O�C�%q ��ܽyƎk�<3��' �1���e����f_i٩%=>ܥ8u�F��[��έ��A��=���:1زj���K�0���1�)�����JNu�R�p�#-Q@�]	D�΂���@]��m#�a��G��"(���\�#|�Ԭv�|�v���,f�"���zy�h����8Yu��iYܺ��ʃg�|��05/ 9A�KKRI�����2�D?�H��,�qW!�+J�*6-�ǡCb� �%��k �Y��OڛIg��۽�+�ە��q �zym]��jH~�xt�Z�(�@��@w�T�K��uRG2�,A�%���O�>�բ0�Ej���*�9���;��S5u�n��փ��H��r�o4��I6�h�A�e^d����_L���E���|e��+_�ss9:V�y�<����{�V7�q@|Щ�3�cSg9��;>�]a���M�Xn(��e�Z=I�|w��Uғ�H�{�孥�jN��'�\�k�7<�23�-茄�L��GǱV�v˿;���pPk�u�\��_��%��P�K���D0���J�V�%$�"����_�xh�0R#�D���H����4��H"d���L�_�p>�U���PD(�-I���I}t�\�׫�n���jQ�7��U������\:�'j��������*�r�Ҷ`��	�C�"5�'8���~��~{����̱��j8���:u��⺙J�_�>�P:�!.�����Uy<u�,��`�V����{k�"�R�<�a�S��u|�"��X���q����(<zQ�y��	*�H�T[�i9(�P�؁������n�6W��gD��~k��,�6�ݒ٬h��{ߡ������!:y��خ���W$	�]�ƫ�p�}J���1E�t,A�����J��x;)"�-�c��XM�C����_�����&�NY��NY*�dTmL���ܾ���amt�7Y�t�-��nNao�f�t���d_�_�Z' =�l����Q{:J�ZqO;>��O<��ɴ��騄t1���,�xd
��x���� dش(�4��V��.6޲��lv��Z������E�~XomB�M�E�}�M6Wwv�^�5�
is�}���:6�]Ɓp��PG]��ǧ�*1=�rmVd ���̈́wЎIݍKs���\�,R�H�Z�C�ui��ÆWxn��6z�Ń._�Xi� ٥pyWD�#��d��6h ��q�jFRi�(Ȕ��-�'���e
H�'���,S�%�
��B����_Q��/��h���nL*� ��Kk>J��(|z4��S�[��[g[�c\�v�emH���v�����RL@�2S�) �,hr	��{��<W^���s�N�dFA)��".w�S	�b���6Qߜ@Ŵ>�w޹�~߇�2�� l֍�>ڋ�b֫�4�t&N��َe�վ��n��kM� ���]�`�):��$�-c�iI�C��8Jұl0�1�DȬ<Rk�q��!{/<��*#CLKG���Ϗ]��������GE�����vk�k~���V����3�K�vh����K�<"��Ԟ���(�K_BY�*(z��ħ���R{^縗����t�7�!�6��q���a�k�� ��<k8{�q�׎����-:�3��Ǡ�X�7c�	<����W��kI�M�LH=P�A�L�s;(�8�1cx�%��牓h-ղɵ���\A2i�~�K�At��U�M�l���d~W���ZT�R�#k ky�z�:$3�����F���9�q8�!Gi���߂�P(M!$񥇴���A��	�)7ve$�>Wk9Bl�0޳L�Ғ�8��$!G�<�a4;��ʱ�>�[����ќ���:�W�s��]W�@���zt�׆��z� �	y�&r�t�Xj���O�c���J��u��	�j]P���Wm%|��HL�r�e�q��u��O�����.<��ּ���al�?�˛������4n:l��b<X�^l���Sݣ�d��mrS�sO�TP�
ɓI��?D��r������~�☤������'�u��\C�\� ǋ��N�X��hf�VQ��WK�j��vjv�a�ٯ��F�x�������K�u˃Ҍ-(^���]G���D��\��F�u��k��D,@���7˕V��1��i��u�^����;��Ϗ�#)�r<3�;i�Ecu�-�m٬�W�����\u�:;��n �<���=�%6f�����XH�9��c*ru�C�%;����٠�9���d�g��&Ds�_�7�x��'�J���q�n�57�[sb���*m��~�<�^D�I�@�+�q(���s�4��Xp|�
���`� ����rD��������{V�"�&Ʊ�}9d~��Gn��`RKj���O���\��V�:[��۹ώ����[gɒ���*sXU��F��aplL�L_ `���Z5�>�<Wl� ���;Uc��^�Ͼ8�𖁩eB�:�k�1�t{ns��Y��H2�[i&{)��b����z�ʴ}GF��AB^���:&檟��TE(�D�<NE�=�H���W���]�X|p��cЙ�8����2B�m�>���3_���_�vFF��j�|��9Fk���J+rS�i�n��f:<U�8�Z���& �,oz�����@b�2�%��P���g<�V�js5�P��Ce2�d���8D�$��`��� ��������>f�c�cg�*h��WG۩�o|����39��k$��U����f3��<��\�
$��e.S����FE�@���'>�\tx�{��ܤ���)��	�(�f�O�Ѫ�Ê�,��Y���y�����O�'���Β�>o>V�틗�-��6A��(T���2uOX�=����Kϥc�♢Tkj�MɜC��[���ߋ�U����s�.}�?����q;�g����`>�g�=��z�u���;�V�G췝��k�Ӵ]BA�ٜ5�%��=,�{pJ�PoK4j�z�> 2p��� �  P�T7xS�c?[T�+� ݡ���k���y���E��GA��*��n8ɹ�mݨ����[�=
B�Z��SR`�sme�%չ�:�Բ����s�d�����䉏k�N�,O2�Dٮ�	l��0*lyϢj��f�p6���N]24��i����tI�����l�X��b۵itk׏�����K\"Cn�{*�C�l8~��ڮkyPk	�ѳ'���٦���aZ2݁C��,��o���N|���A��X+6>M{�?��U�2����d�z%�W�N+_�qQ��w	=L���j�ci��eR�����k�j)ճ���� ��� S�6p|�$UX��*Y�S�d���������X��MSm�`8_�����$���q���SM������t�O�ݨ@�]&�[�ճ��ũ8��cC��M�ِ��6���G�XH������ʌ��֔�('�����;�m�Խ��N�O�OV�n�TzU����y@���}:�5ڣ�͛��l�HN�Z&�L�c�;���}ym'��͛=6�k�k�0E�a�c�>�/]�b�A��0�Z��c�.��Ld[��0ЪE _����ȿ�'лPO��	�N�$+��_�����I�Սx�me����|���x�_Vq����������ɣ�Im�b?�q��i�F�(ESx��+�
r�t���XI�\h#uG�O�ġ�}J���˷?�p>,�E�
��s�Ӽ�o�O�l2�F1Z�g��k�ݾ�:�j�n����u�/H/�8:���c:G�+/��#�$���}8�j����s�N�aEZ��Z�]�mrW�"��7�A�oA�V����Mz�e�pͪ��a=D�i|vFY~�$��*�i�:\]������s��i�_s#���a`>(��J�/D=���L�Íl�x�g��f��N�-J�����o���u�9��7���\�i�V򵖮q/٬y�y~s�ͭ\I~���G�I}Y$�շ���������}�p2��Ԧ�j. ���!�MA%���&}���[���)�PK��{��Wd�����}a�8:5���k��z3����tٵ�#h�өq��ǖ�ޣ�p������[/?�
aiﵶ�)��}#���hv�quK�[�<�g��
���˴vq|N)��WR{6f�e*��?��Ȣ��ĉ�	T���䦽2�`�����N��~(���&p�9$��q�N�l*��f��/�^��!�C�b:��^$�����u�J$	#s��>��3�\�G ���B��Q�"��g�ж�
).��c+�ԋ��Q94��x <�/k#)�`���x��t�����>����v�i��*ڼ_^Kb�WxAqs�v�|?�]����+-`��Xɻ�����=����7�=q�ku�t��e�jg�T�~�U+�����F��d=7��ڵ@���C�����t���+ouJ������V	�Q`�����s��=
�
ߤ@�՞7|?ז��bK�E��A���$#��c��v��A(6�m��B�.^n�Ǥӟ�̙LO.�o��Jz7���u&�p>�ٞV�����_Ao����]ġ�����m�p���9l�HB���% �~,є�#��o���ﱷS[��?M��W[A���f������Y�wV̪p�t̶EҬ��^�o�ۅ�ߜi���;I�C^�-XX~��K��@��9�mS���5�`�Q	㙨�z>B�Z# 7������Qwxl�&�T��/���)s�8굳f�[(���&4�0��`�]�������<Z/^Y�|u��f��T�YDw�	�3��m[b���3;��ɎBF��=�8���Ku�_�m8U�<���sG�����g������N�ܸV�z�}�F���AANe6{�<so��S�o�]=�r���.���J�b�@`=���.�3��e,O�[J`������o�<�PAH�x��Q��TF�'��n2��ӎ�L�z�e�U6�]/-sҾa�>u�x6m�;>�v�q
^���c�rmݓ�7˽[pڜ�@�m+���u��zF�|�^~�ڲ��}�"Y�q���ˁ��L�rn򅒝�x���p�ͷ�Aj��j��;n�}��N���u�{�w��ڀ������oq5��VH��\3`J�z�^&�	�P���rt����\����ޜ{ 6B�h�|mK�]��9}�Q���p��Kénj'y��kq�t1�l'[��k���z-c���DPW7E ��n�0�Y��$0*V��!�Oz���ɩL]��ʛuҏ�	S"O��ʊ������zЧ��E]6{�֥9:ǵN/���­�n��l$�jlo��gt�	:���)��vLĜ�Dc���9�+����D���Qy���	�kU�Q?~>,��V�%��ߵ����3��z��~��j����n��M���0ړpt�Tw�f�����c���%���V��e������$��Tq$�z���ۍ=�\��x��3S�7|�K��5r-��m(��sŎ����R˯���p�-ܓop	>���|Dr1�s~;9ˤ��ě4���rۦPɋ��BM�	q��K�����%�=FL�l��%=+���J,�'/����K��P�[dN���I@��@�_wA�G{~۾�+�Ŀ+��y�.k���o'�Z�dA��õ�t:]�ً�2�A�@���y7���%�E4�D� Y���C��=��G�������05L�r���Z�A��\�yR�t��]�H>w���d^oڙE�so?m�Ӣq��3��b�J��.m�S֒��@GȲ�k�H
��@��GZH��YR\6�_����0�G��O���'�Y��l3�4�o��s��v1����ݎ��a�FYެ9������ܮ�֋�E~���)9�\fzP]��N`
�Y��&��H�p��?^���^��'B��"��'���?��zT������ёnF�-nnj�(kI���	R뺘f��x>�T���+��qd�O=A�6�B����f.�j�|ç^��P���R���cZ#	2W#K#��?'	����!�l��}��m�����������R��⽁ϡ7�~5�{:�-�J������Ǡ���l��Ty^� �`�z-�앇,P.�jk�����Ѡ�o�=�uy��//�!��Gp9~k؆-�4��x��wk������ܞ��{�\�i�s�~����u���Ǫ�
E10�^��J����+D��Cx�Lc��S�7� �^j��ś�M�.��X	0���i5���v�xܛ��v4��ע����Ӄ-,�e��f�6���99�;N�8՝�� @�Y>(6"�7��w���\`-�|-��ߚ�?�� s˄4'�'���m$������cu4�6���5���cx�܉����aUC��5���?��E�+G�ߐ��s�Yx�4=��ͫ{��u��!A�8�c
����׬`�����/ l�      �   �   x�5��B@  �}��d7�ҶLRQj�i�%�d���;�=����x^﬛�
�VW��Rj����l�_<�=Q�rz�&���jjЎ�S��ܷw=��y�R������Ԭ��!�E����d�����zY�G��HP���Q��;�4�$�!]Ѱ� ��:C\T ��3d      �      x������ � �      �   %   x�3�tI-�,�2�tL�����9C�S���=... ���      �   m   x�3��OL����OI,�H�O,J���4�1�,�2�Է*�)MG�3��t��#t����[��f�p��
e���
��P��0����% �ɉ%���E��H���qqq xD07     