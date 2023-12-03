import {
  MicroCMSListAPI,
  MicroCMSRelation,
  createClient,
} from "microcms-ts-sdk";

type MicroCMSMetaData = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

type Category = MicroCMSMetaData & {
  id: string;
  name: string;
  craetedAt: string;
  updatedAt: string;
};

type RichEdit = {
  fieldId: "richEditor";
  content: string;
};

type Yosou = {
  fieldId: "yosou";
  raceName: string;
  summary: string;
  opinion: string;
};

type NextInfo = {
  race?: string;
  date?: string;
};

type Tag = {
  tag: string;
};

type Body = Yosou | RichEdit;

export type Post = MicroCMSMetaData & {
  id: string;
  createdAt: string;
  updatedAt: string;
  publiushedAt: string;
  title: string;
  categories: MicroCMSRelation<Category>[];
  body: Body[];
};

export type Horse = MicroCMSMetaData & {
  id: string;
  name: string;
  memo: string;
  nextInfo?: NextInfo;
  tags?: Tag[];
};

type Endpoints = {
  categories: MicroCMSListAPI<Category>;
  posts: MicroCMSListAPI<Post>;
  horses: MicroCMSListAPI<Horse>;
};

export const microcmsClient = createClient<Endpoints>({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});
