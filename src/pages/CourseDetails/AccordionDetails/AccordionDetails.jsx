import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/accordion/Accordion";
import { PlayCircle, FileText, Lock, Eye } from "lucide-react";
import { useContext } from "react";
import { DisplayContext } from "../../../context/DisplayContext";

// 1. مصفوفة البيانات الشاملة لجميع أقسام وحالات الكورس الموضحة بالصور
const courseSections = [
  {
    id: "intro",
    title: "Intro to Course and Histudy",
    duration: "1hr 30min",
    lessons: [
      { id: "l1", title: "Course Intro", type: "video", duration: "30 min", hasPreview: true, isLocked: false },
      { id: "l2", title: "Watch Before Start", type: "video", duration: "0.5 min", hasPreview: true, isLocked: false },
      { id: "l3", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
    ]
  },
  {
    id: "fundamentals",
    title: "Course Fundamentals",
    duration: "2hr 30min",
    lessons: [
      { id: "l4", title: "Course Intro", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l5", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l6", title: "Why You Should Not Go To Education.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l7", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l8", title: "Ten Factors That Affect Education's Longevity.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l9", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
    ]
  },
  {
    id: "setup",
    title: "You can develop skill and setup",
    duration: "1hr 50min",
    lessons: [
      { id: "l4", title: "Course Intro", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l5", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l6", title: "Why You Should Not Go To Education.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l7", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l8", title: "Ten Factors That Affect Education's Longevity.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l9", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
    ]
  },
  {
    id: "knowledge",
    title: "15 Things To Know About Education?",
    duration: "2hr 60min",
    lessons: [
      { id: "l4", title: "Course Intro", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l5", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l6", title: "Why You Should Not Go To Education.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l7", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l8", title: "Ten Factors That Affect Education's Longevity.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l9", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
    ]
  },
  {
    id: "description",
    title: "Course Description",
    duration: "2hr 20min",
    lessons: [
      { id: "l4", title: "Course Intro", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l5", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l6", title: "Why You Should Not Go To Education.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l7", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
      { id: "l8", title: "Ten Factors That Affect Education's Longevity.", type: "video", duration: null, hasPreview: false, isLocked: true },
      { id: "l9", title: "Read Before You Start", type: "read", duration: null, hasPreview: false, isLocked: true },
    ]
  }
];

export function AccordionDetails() {

  const { dark } = useContext(DisplayContext);

  return (
    <div
      className={`w-full max-w-3xl p-6 rounded-xl border border-gray-100 font-sans mx-auto ${
        dark
          ? "bg-[#202c40] text-gray-100 shadow-[0_0_2px_2px_#FF8904]"
          : "bg-white text-gray-800 shadow-[0_0_2px_2px_#FF8904]"
      }`}
    >
      <h2
        className={`text-xl font-bold mb-6 text-left ${
          dark ? "text-gray-100" : "text-gray-900"
        }`}
      >
        Course Content
      </h2>

      <Accordion
        type="single"
        collapsible
        className="space-y-4"
        defaultValue="intro"
      >
        {courseSections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            {/* رأس الأكورديون */}
            <AccordionTrigger
              className={`hover:no-underline active:no-underline px-5 py-4 transition-colors ${
                dark
                  ? "bg-[#202c40] data-[state=open]:bg-[#29364b]"
                  : "bg-white data-[state=open]:bg-gray-50/50"
              }`}
            >
              <div className="flex items-center gap-3 text-left w-full pr-6">

                <span
                  className={`font-bold text-sm md:text-base transition-colors duration-200 ${
                    dark
                      ? "text-gray-100 [.group[data-state=open]_&]:text-[#2f57ef]"
                      : "text-gray-800 [.group[data-state=open]_&]:text-[#2f57ef]"
                  }`}
                >
                  {section.title}
                </span>

                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                    dark
                      ? "text-gray-300 bg-[#2b374b]"
                      : "text-gray-500 bg-gray-100/80"
                  }`}
                >
                  {section.duration}
                </span>

              </div>
            </AccordionTrigger>

            {/* محتوى القسم */}
            <AccordionContent
              className={`p-0 border-t border-gray-200 ${
                dark ? "bg-[#202c40]" : "bg-white"
              }`}
            >
              <div
                className={`divide-y ${
                  dark ? "divide-gray-700" : "divide-gray-100"
                }`}
              >
                {section.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center justify-between px-6 py-3.5 transition-colors ${
                      dark
                        ? "hover:bg-[#29364b] active:bg-[#29364b]"
                        : "hover:bg-gray-50/60 active:bg-gray-50/60"
                    }`}
                  >

                    {/* الجهة اليسرى */}
                    <div
                      className={`flex items-center gap-3 text-sm ${
                        dark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {lesson.type === "video" ? (
                        <PlayCircle
                          className={`w-4 h-4 shrink-0 ${
                            dark ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                      ) : (
                        <FileText
                          className={`w-4 h-4 shrink-0 ${
                            dark ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                      )}

                      <span className="font-medium hover:text-[#2f57ef] active:text-[#2f57ef] cursor-pointer transition-colors">
                        {lesson.title}
                      </span>
                    </div>

                    {/* الجهة اليمنى */}
                    <div className="flex items-center gap-4">

                      {lesson.duration && (
                        <span
                          className={`text-xs font-medium ${
                            dark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {lesson.duration}
                        </span>
                      )}

                      {lesson.hasPreview && (
                        <button className="flex items-center gap-1 text-[11px] font-bold text-[#2f57ef] bg-[#2f57ef]/10 hover:bg-[#2f57ef]/20 active:bg-[#2f57ef]/20 px-2.5 py-1 rounded transition-colors">
                          <Eye className="w-3 h-3" />
                          Preview
                        </button>
                      )}

                      {lesson.isLocked && (
                        <Lock
                          className={`w-3.5 h-3.5 ${
                            dark ? "text-gray-500" : "text-gray-400"
                          }`}
                        />
                      )}

                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}