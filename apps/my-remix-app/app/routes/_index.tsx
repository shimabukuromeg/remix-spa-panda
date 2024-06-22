import type { MetaFunction } from "@remix-run/node";
import { css } from "styled-system/css";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ClientActionFunctionArgs, Form, redirect } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const body = await request.formData();
  console.log("title", body.get("title"));
  console.log(body);
  // await createBlogPost({
  //   title: body.get("title")!,
  //   content: body.get("content")!,
  // });
  return redirect(`/`);
}

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "50px",
      }}
    >
      <h1>Welcome to Remix (SPA Mode)</h1>

      <div
        className={css({
          marginTop: 5,
          display: "flex",
          flexDir: "column",
          gap: 3,
          width: "500px",
        })}
      >
        {/* フォーム */}
        <Form method="post">
          <Input type="text" name="title" placeholder="Hello from Panda" />
          <div
            className={css({
              paddingTop: 3,
            })}
          >
            <Button type="submit">保存</Button>
          </div>
        </Form>
      </div>
      <div>
        <div
          className={css({
            divideX: "3px",
            divideY: "10px",
            divideColor: "black",
            w: "full",
          })}
        />
      </div>
      <div>
        <a href="/about">About</a>
      </div>
    </div>
  );
}
