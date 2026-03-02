import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PageHeading from "@/app/_components/PageHeading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const myIdeas = [
  {
    id: 1,
    title: "Control tasks from table view",
    desc: "إدارة المهام وتعديل حالتها مباشرة من جدول بيانات مرن وسريع بدل الكانبان.",
  },
  {
    id: 2,
    title: "Salah and adhkar reminder",
    desc: "نظام تنبيهات ذكي للصلاة والأذكار مدمج داخل بيئة العمل لضمان البركة في الوقت.",
  },
  {
    id: 3,
    title: "Trello integration",
    desc: "إمكانية استيراد المهام والمشاريع من Trello بضغطة زر واحدة لتسهيل الانتقال لمنصتنا.",
  },
  {
    id: 4,
    title: "Desktop App",
    desc: "تحويل المنصة لتطبيق سطح مكتب باستخدام Electron لتجربة أسرع وأداء أفضل على Zorin OS.",
  },
  {
    id: 5,
    title: "Content creation with AI",
    desc: "مساعد ذكي يولد أفكاراً للمحتوى ويجهز مسودات المنشورات بناءً على أهدافك.",
  },
  {
    id: 6,
    title: "Task Prioritization AI", // عدلت العنوان عشان ميتكررش
    desc: "استخدام Gemini لتحليل أهمية المهام وترتيبها تلقائياً بناءً على المواعيد النهائية.",
  },
  {
    id: 7,
    title: "Offline working",
    desc: "دعم وضع الأوفلاين (PWA) بحيث تقدر تشتغل وتضيف مهام حتى لو النت فصل في أي وقت.",
  },
  {
    id: 8,
    title: "Counting work timer",
    desc: "عداد زمني (Pomodoro) لحساب الوقت الفعلي المستهلك في كل مهمة بدقة.",
  },
  {
    id: 9,
    title: "Dynamic background for timer",
    desc: "خلفيات حية ومريحة للعين (Lo-fi vibes) تتغير حسب حالة التايمر ونوع المهمة.",
  },
];
const IdeasPage = async () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <PageHeading title="Next Features" />

      <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-card mt-5">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-50">Feature</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {myIdeas.map((idea) => (
              <TableRow key={idea.id} className="group transition-colors">
                <TableCell className="font-bold text-sm">
                  {idea.title}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {idea.desc}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-[10px] text-center text-muted-foreground italic mt-3">
        Keep building! 🚀
      </p>
    </div>
  );
};

export default IdeasPage;
