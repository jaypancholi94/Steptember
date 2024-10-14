import { Greeting } from "@/components/greeting";
import { Header } from "@/components/header";
import { BodyLayout } from "@/components/layout/body";

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <Header />
      <main className="container mx-auto h-full">
        <BodyLayout>
          <Greeting name="Jay" />
        </BodyLayout>
      </main>
    </div>
  );
}
