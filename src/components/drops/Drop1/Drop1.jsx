import React, { useContext } from 'react'
import { DisplayContext } from '../../../context/DisplayContext'

export default function Drop1() {

  const { dark } = useContext(DisplayContext)

  return (

    <section
      className={`
        hidden group-hover/drop1:flex group-active/drop1:flex flex-row
        absolute top-full left-0
        rounded-xl shadow-2xl
        min-w-[650px]
        overflow-hidden
        z-50
        transition-all duration-300
        pt-2

        ${dark
          ? 'bg-[#1C2833] text-white border border-amber-500'
          : 'bg-white text-black border border-amber-500'
        }

        before:absolute before:top-[-20px] before:left-0
        before:w-full before:h-[20px]
        before:content-['']

        has-[#tab2:hover]:[--active-tab:2]
        has-[#tab3:hover]:[--active-tab:3]
        has-[#tab4:hover]:[--active-tab:4]
      `}
    >

      {/* القائمة الجانبية */}

      <div
        className={`
          flex flex-col gap-1 p-4
          w-52
          border-r
          shrink-0
          relative z-20

          ${dark
            ? 'bg-[#17232D] border-gray-700'
            : 'bg-[#F8F9FA] border-gray-100'
          }
        `}
      >

        {/* Tab 1 */}

        <div
          id="tab1"
          className={`
            px-4 py-2.5
            rounded-lg
            text-sm font-medium
            cursor-pointer
            transition

            ${dark
              ? 'text-gray-300 hover:bg-[#253545] active:bg-[#253545] hover:text-blue-400 active:text-blue-400'
              : 'text-gray-600 hover:bg-blue-50 active:bg-blue-50 hover:text-blue-600 active:text-blue-600'
            }
          `}
        >
          Course School
        </div>


        {/* Tab 2 */}

        <div
          id="tab2"
          className={`
            px-4 py-2.5
            rounded-lg
            text-sm font-medium
            cursor-pointer
            transition

            ${dark
              ? 'text-gray-300 hover:bg-[#253545] active:bg-[#253545] hover:text-blue-400 active:text-blue-400'
              : 'text-gray-600 hover:bg-blue-50 active:bg-blue-50 hover:text-blue-600 active:text-blue-600'
            }
          `}
        >
          Online School
        </div>


        {/* Tab 3 */}

        <div
          id="tab3"
          className={`
            px-4 py-2.5
            rounded-lg
            text-sm font-medium
            cursor-pointer
            transition

            ${dark
              ? 'text-gray-300 hover:bg-[#253545] active:bg-[#253545] hover:text-pink-400 active:text-pink-400'
              : 'text-gray-600 hover:bg-blue-50 active:bg-blue-50 hover:text-blue-600 active:text-blue-600'
            }
          `}
        >
          Kindergarten
        </div>


        {/* Tab 4 */}

        <div
          id="tab4"
          className={`
            px-4 py-2.5
            rounded-lg
            text-sm font-medium
            cursor-pointer
            transition

            ${dark
              ? 'text-gray-300 hover:bg-[#253545] active:bg-[#253545] hover:text-emerald-400 active:text-emerald-400'
              : 'text-gray-600 hover:bg-blue-50 active:bg-blue-50 hover:text-blue-600 active:text-blue-600'
            }
          `}
        >
          Classic LMS
        </div>

      </div>


      {/* المحتوى المتغير */}

      <div
        className={`
          relative flex-1
          p-6
          min-h-[220px]

          ${dark
            ? 'bg-[#1C2833]'
            : 'bg-white'
          }
        `}
      >

        {/* Content 1 */}

        <div
          className={`
            absolute inset-0
            p-6
            flex flex-row gap-12
            transition-all duration-75
            z-0

            ${dark
              ? 'bg-[#1C2833]'
              : 'bg-white'
            }

            has-[#tab2:hover]~*_&:opacity-0
            has-[#tab2:hover]~*_&:invisible

            has-[#tab3:hover]~*_&:opacity-0
            has-[#tab3:hover]~*_&:invisible

            has-[#tab4:hover]~*_&:opacity-0
            has-[#tab4:hover]~*_&:invisible
          `}
        >

          <div className="flex flex-col gap-3">

            <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">
              Course School (1)
            </h4>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-blue-400 active:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600 active:text-blue-600'
                }
              `}
            >
              Web Design
            </span>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-blue-400 active:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600 active:text-blue-600'
                }
              `}
            >
              Figma to Code
            </span>

          </div>


          <div className="flex flex-col gap-3 mt-5">

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-blue-400 active:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600 active:text-blue-600'
                }
              `}
            >
              Adobe Photoshop
            </span>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-blue-400 active:text-blue-400'
                  : 'text-gray-700 hover:text-blue-600 active:text-blue-600'
                }
              `}
            >
              Illustrator
            </span>

          </div>

        </div>


        {/* Content 2 */}

        <div
          className={`
            absolute inset-0
            p-6
            hidden
            z-10
            animate-in fade-in duration-75

            ${dark
              ? 'bg-[#1C2833]'
              : 'bg-white'
            }

            [section:has(#tab2:hover)_&]:flex
          `}
        >

          <div className="flex flex-col gap-3">

            <h4 className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-1">
              Online School (2)
            </h4>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-purple-400 active:text-purple-400'
                  : 'text-gray-700 hover:text-purple-600 active:text-purple-600'
                }
              `}
            >
              React JS
            </span>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-purple-400 active:text-purple-400'
                  : 'text-gray-700 hover:text-purple-600 active:text-purple-600'
                }
              `}
            >
              Next.js Framework
            </span>

          </div>

        </div>


        {/* Content 3 */}

        <div
          className={`
            absolute inset-0
            p-6
            hidden
            z-10
            animate-in fade-in duration-75

            ${dark
              ? 'bg-[#1C2833]'
              : 'bg-white'
            }

            [section:has(#tab3:hover)_&]:flex
          `}
        >

          <div className="flex flex-col gap-3">

            <h4 className="text-xs font-bold text-pink-500 uppercase tracking-wider mb-1">
              Kindergarten (3)
            </h4>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-pink-400 active:text-pink-400'
                  : 'text-gray-700 hover:text-pink-600 active:text-pink-600'
                }
              `}
            >
              Kids English
            </span>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-pink-400 active:text-pink-400'
                  : 'text-gray-700 hover:text-pink-600 active:text-pink-600'
                }
              `}
            >
              Basic Math
            </span>

          </div>

        </div>


        {/* Content 4 */}

        <div
          className={`
            absolute inset-0
            p-6
            hidden
            z-10
            animate-in fade-in duration-75

            ${dark
              ? 'bg-[#1C2833]'
              : 'bg-white'
            }

            [section:has(#tab4:hover)_&]:flex
          `}
        >

          <div className="flex flex-col gap-3">

            <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1">
              Classic LMS (4)
            </h4>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-emerald-400 active:text-emerald-400'
                  : 'text-gray-700 hover:text-emerald-600 active:text-emerald-600'
                }
              `}
            >
              PHP Fundamentals
            </span>

            <span
              className={`
                text-sm font-medium cursor-pointer transition-colors
                ${dark
                  ? 'text-gray-300 hover:text-emerald-400 active:text-emerald-400'
                  : 'text-gray-700 hover:text-emerald-600 active:text-emerald-600'
                }
              `}
            >
              Laravel Basics
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}