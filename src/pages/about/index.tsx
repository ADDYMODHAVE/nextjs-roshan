import { SmallIntro } from "@/Components/Aboutuspage/SmallIntro";
import { Typewriter } from "@/Components/Aboutuspage/Typography";
import { SocialMediaLinks } from "@/Components/Aboutuspage/SocialMediaLinks";

export default function about() {
  return (
    <div className="mt-2">
      <Typewriter />
      <SmallIntro />
      <SocialMediaLinks />
    </div>
  );
}
