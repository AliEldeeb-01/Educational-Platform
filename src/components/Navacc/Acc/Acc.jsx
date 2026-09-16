//  الملف ده مجرد عرض بيانات التعديل في الاكورديون
import React, { useContext } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../accordion/Accordion"

import { Link } from "react-router-dom"
import { DisplayContext } from "../../../context/DisplayContext"
// 📊 الداتا الكاملة والمنظمة بالملي بناءً على تقسيمة التصميم
const megaMenuItems = [
  {
    value: "home-menu",
    trigger: "Home",
    isNestedDashboard: false,
    sections: [
      {
        title: "", // ملوش عنوان فرعي، روابط علطول
        links: [
          { name: "Home Demo", path: "/" }, { name: "Marketplace", path: "#" },
          { name: "kindergarten", path: "#" }, { name: "University Classic", path: "#" },
          { name: "Home Elegant", path: "#" }, { name: "Gym Coaching", path: "#" },
          { name: "Online School", path: "#" }, { name: "University Status", path: "#" },
          { name: "Home Technology", path: "#" }, { name: "Instructor Portfolio", path: "#" },
          { name: "Language Academy", path: "#" }, { name: "Single Course", path: "#" },
          { name: "Online Course", path: "#" }, { name: "Classic Lms", path: "#" },
          { name: "Course School", path: "#" }, { name: "Udemy Affiliate", path: "#" },
          { name: "Online Academy", path: "#" }, { name: "Instructor Coaches", path: "#" },
          { name: "Modern University", path: "#" }, { name: "Multilingual", path: "#" },
          { name: "Art Design School", path: "#" }, { name: "Wishlist", path: "#" },
          { name: "Coaching", path: "#" }, { name: "Health Institute", path: "#" },
          { name: "Life Coach", path: "#" }, { name: "Islamic Center", path: "#" }
        ]
      }
    ]
  },
  {
    value: "courses-menu",
    trigger: "Courses",
    isNestedDashboard: false,
    sections: [
      {
        title: "Course Layout", // 👈 العنوان اللي اتكلمت عنه
        links: [
          { name: "Filter One Toggle", path: "#" }, { name: "Filter One Open", path: "#" },
          { name: "Filter Two Toggle", path: "#" }, { name: "Filter Two Open", path: "#" },
          { name: "Course With Tab", path: "#" }, { name: "Course With Tab Two", path: "#" },
          { name: "Course Card Two", path: "#" }
        ]
      },
      {
        title: "Course Layout",
        links: [
          { name: "Course Card Three", path: "#" }, { name: "Course Masonry", path: "#" },
          { name: "Course With Sidebar", path: "#" }, { name: "Course Details", path: "/Details" },
          { name: "Course Details Two", path: "#" }, { name: "Course Lesson New", path: "#" },
          { name: "Create Course New", path: "#" }
        ]
      }
    ]
  },
  {
    value: "dashboard-menu",
    trigger: "Dashboard",
    isNestedDashboard: true, // 🔥 دي الوحيدة اللي Nested أكورديون حقيقي
    sections: [
      {
        title: "Instructor Dashboard",
        links: [
          { name: "Dashboard", path: "#" }, { name: "Profile", path: "#" },
          { name: "Enrolled Courses", path: "#" }, { name: "Wishlist", path: "#" },
          { name: "Reviews", path: "#" }, { name: "My Quiz Attempts", path: "#" },
          { name: "Order History", path: "#" }, { name: "My Course", path: "#" },
          { name: "Announcements", path: "#" }, { name: "Quiz Attempts", path: "#" },
          { name: "Assignments", path: "#" }, { name: "Settings", path: "#" }
        ]
      },
      {
        title: "Student Dashboard",
        links: [
          { name: "Dashboard", path: "#" }, { name: "Profile", path: "#" },
          { name: "Enrolled Courses", path: "#" }, { name: "Wishlist", path: "#" },
          { name: "Reviews", path: "#" }, { name: "My Quiz Attempts", path: "#" },
          { name: "Order History", path: "#" }, { name: "Settings", path: "#" }
        ]
      }
    ]
  },
  {
    value: "pages-menu",
    trigger: "Pages",
    isNestedDashboard: false,
    sections: [
      {
        title: "Get Started",
        links: [
          { name: "Home", path: "" }, { name: "Course Details", path: "/Details/8" },
          { name: "Cart Page", path: "/CartPage" }, { name: "Shop Books", path: "/Shop" },
          { name: "SingleProduct", path: "/SingleProduct" }, { name: "Shop Courses", path: "/ShopCourses" },
          { name: "Register", path: "/Register" }, { name: "Login", path: "/Login" }, { name: "Profile", path: "/Profile" }
        ]
      },

    ]
  },
  {
    value: "elements-menu",
    trigger: "Elements",
    isNestedDashboard: false,
    sections: [
      {
        title: "Style Guide",
        links: [
          { name: "Style Guide Hot", path: "#" }, { name: "Accordion", path: "#" },
          { name: "Advance Tab", path: "#" }, { name: "About New", path: "#" },
          { name: "Brand", path: "#" }, { name: "Button", path: "#" },
          { name: "Badge", path: "#" }, { name: "Card", path: "#" }
        ]
      },
      {
        title: "Style Guide",
        links: [
          { name: "Call To Action", path: "#" }, { name: "Counter", path: "#" },
          { name: "Categories", path: "#" }, { name: "Header Style", path: "#" },
          { name: "Newsletter", path: "#" }, { name: "Team", path: "#" },
          { name: "Social", path: "#" }, { name: "List Style", path: "#" }
        ]
      },
      {
        title: "Style Guide",
        links: [
          { name: "Gallery", path: "#" }, { name: "Pricing", path: "#" },
          { name: "Progressbar", path: "#" }, { name: "Testimonial", path: "#" },
          { name: "Service", path: "#" }, { name: "Split Area", path: "#" },
          { name: "Search Style", path: "#" }, { name: "Instagram Style", path: "#" }
        ]
      }
    ]
  },
  {
    value: "blog-menu",
    trigger: "Blog",
    isNestedDashboard: false,
    sections: [
      {
        title: "Blog Styles",
        links: [
          { name: "Blog List", path: "#" }, { name: "Blog Grid", path: "#" },
          { name: "Blog Grid Minimal", path: "#" }, { name: "Blog With Sidebar", path: "#" },
          { name: "Blog Details", path: "#" }, { name: "Post Format Standard", path: "#" },
          { name: "Post Format Gallery", path: "#" }
        ]
      },
      {
        title: "Get Started",
        links: [
          { name: "Post Format Quote", path: "#" }, { name: "Post Format Audio", path: "#" },
          { name: "Post Format Video", path: "#" }
        ]
      }
    ]
  }
]

export function Acc({ setIsMenuOpen, isMenuOpen }) {
  const { dark } = useContext(DisplayContext)
  const ScrollUpAndFalseMenu = ()=>{
    setIsMenuOpen(false)
    window.scrollTo(0,0)
  }
  return (
    <div className={`w-full max-w-sm ${dark == true ?
      `bg-[#192335] text-gray-100 `
      : `bg-white text-[#192335]`} p-4 font-sans select-none`}>

      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {megaMenuItems.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="border-b border-amber-100 py-1">

            <AccordionTrigger className="flex w-full items-center justify-between py-3 text-sm font-bold  transition-colors duration-200 hover:text-blue-300 active:text-blue-300">
              {item.trigger}
            </AccordionTrigger>

            <AccordionContent className="pb-3 pt-1 pl-3   shadow-[0_0_2px_2px_#DCBF56]">

              {/* 🔍 الحالة الأولى: لو إحنا في الـ Dashboard هنعمل تداخل حقيقي (Nested Accordion) */}
              {item.isNestedDashboard ? (
                <Accordion type="single" collapsible className="w-full">
                  {item.sections.map((group, gIndex) => (
                    <AccordionItem key={gIndex} value={`${item.value}-sub-${gIndex}`} className="border-none">
                      <AccordionTrigger className="flex w-full items-center justify-between py-2 text-xs font-semibold  transition-all duration-200 hover:text-blue-300 active:text-blue-300">
                        {group.title}
                      </AccordionTrigger>
                      <AccordionContent className="pb-1 pt-1 pl-3  shadow-[0_0_2px_2px_#DCBF56] flex flex-col gap-1.5">
                        {group.links.map((link, lIndex) => (
                          <Link
                            key={lIndex}
                            to={link.path}
                            className="py-1 text-[11px] font-medium transition-colors duration-200 hover:text-blue-300 active:text-blue-300 block"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                /* 🔍 الحالة الثانية: باقي الأقسام، العناوين بتنزل كـ نص شيك والروابط مفرودة تحتها علطول */
                <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
                  {item.sections.map((section, sIndex) => (
                    <div key={sIndex} className="flex flex-col gap-1.5">
                      {/* لو السكشن ليه عنوان (زي Course Layout) هيعرضه كخط عريض رمادي غامق ومش رابط */}
                      {section.title && (
                        <span className="text-[11px] font-bold  uppercase tracking-wider pt-2 block">
                          {section.title}
                        </span>
                      )}

                      {/* الروابط المفرودة تحت العنوان الفرعي */}
                      {section.links.map((link, lIndex) => (
                        <Link
                          key={lIndex}
                          to={link.path}
                          className="py-1 text-[11px] font-medium  transition-colors duration-200 hover:text-blue-300 active:text-blue-300 block"
                          onClick={() => ScrollUpAndFalseMenu()}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  )
}