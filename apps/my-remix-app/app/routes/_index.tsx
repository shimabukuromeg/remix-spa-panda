import type { MetaFunction } from "@remix-run/node";
import { css } from "styled-system/css";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ClientActionFunctionArgs, Form, redirect } from "@remix-run/react";
import { sum } from "calc";
import { FormLabel } from "~/components/ui/form-label";
import { useCallback, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const body = await request.formData();
  const a = body.get("a") ? parseInt(body.get("a") as string) : 0;
  const b = body.get("b") ? parseInt(body.get("b") as string) : 0;
  console.log(sum(a, b));
  return redirect(`/`);
}

export default function Index() {
  const [resultA, setResultA] = useState(0);
  const [resultB, setResultB] = useState(0);
  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setResultA(0);
      return;
    }
    setResultA(parseInt(e.target.value));
  };
  const onChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setResultB(0);
      return;
    }

    setResultB(parseInt(e.target.value));
  };
  const result = useCallback(() => {
    if (resultA === 0 && resultB === 0) {
      return "0";
    }
    return sum(resultA, resultB);
  }, [resultA, resultB]);

  // MEMO: 環境変数の確認
  console.log(import.meta.env);
  console.log(import.meta.env.VITE_SOME_KEY);

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
      <h1>リミックス！！！</h1>

      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          h: "full",
        })}
      >
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
          <Form
            method="post"
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: 3,
            })}
          >
            <FormLabel
              className={css({
                display: "flex",
                flexDirection: "column",
                w: "100px",
              })}
            >
              入力A
              <Input type={"number"} name="a" onChange={onChangeA} />
            </FormLabel>
            <FormLabel
              className={css({
                display: "flex",
                flexDirection: "column",
                w: "100px",
              })}
            >
              入力B
              <Input type={"number"} name="b" onChange={onChangeB} />
            </FormLabel>
            <div
              className={css({
                paddingTop: 3,
              })}
            >
              <Button type="submit">保存</Button>
            </div>
          </Form>
        </div>
        <div
          className={css({
            w: "full",
            h: "full",
          })}
        >
          <div>入力A + 入力B</div>
          <p>{result()}</p>
        </div>
      </div>
    </div>
  );
}
