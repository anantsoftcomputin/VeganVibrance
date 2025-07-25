"use client";
import {
  BookOpen,
  PenSquare,
  Check,
  X,
  FileText,
  Mail,
  CalendarDays,
} from "lucide-react";

const WriteForUs = () => {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <section
        className="relative py-16 sm:py-20"
        aria-labelledby="privacy-main-heading"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Write for Us – Guest Post Guidelines
            </h1>
            <p className="text-lg text-gray-700 mx-auto">
              Share Your Vegan Passion with TheVeganVibrance.com
            </p>
          </div>
          <div className="space-y-6" role="list">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="policy-introduction-heading"
            >
              <div className="p-6">
                <p className="text-gray-600">
                  At TheVeganVibrance.com, we celebrate plant-based living
                  through nutritious recipes, ethical discussions, and
                  sustainable wellness. If you're passionate about veganism,
                  cruelty-free lifestyles, or eco-conscious living, we invite
                  you to contribute!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                  Content Submission Guidelines
                </h2>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  1. Original & Unpublished Work
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Submit only original content – no repurposed blog posts or
                      AI-generated articles.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      We run plagiarism checks. If it’s been published
                      elsewhere, it won’t be accepted.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  2. Relevant & Insightful Topics
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-3">We prioritize:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Whole-food recipes (minimally processed, nutrient-dense).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Vegan nutrition (protein sources, supplements, meal
                      planning).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Ethical veganism (animal rights, environmental impact).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Sustainable living (zero-waste tips, eco-friendly swaps).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Vegan product reviews (honest, detailed comparisons).
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-gray-600 mb-3">We don’t accept:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Fad diets or non-vegan content (e.g., vegetarianism
                        without vegan focus).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Unsubstantiated health claims (e.g., "Veganism cures X"
                        without evidence).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  3. Quality & Structure
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fluency: Well-written, error-free English.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Depth: 1,000+ words with actionable advice or thorough
                      research.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Readability: Use subheadings, bullet points, and clear
                      formatting.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  4. No Spam or Self-Promotion
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No affiliate links or promotional content.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>One contextual backlink allowed in content.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  5. Evidence-Based Content
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Cite studies for health/nutrition claims (e.g., NIH,
                      PubMed).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      For recipes, include ingredient alternatives (e.g.,
                      gluten-free swaps).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  6. Media & SEO Requirements
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Featured image: At least 1 high-quality photo with an alt
                      tag.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Metadata: Include Meta title (≤60 chars), Meta description
                      (1–2 sentences, ≤160 chars), and 2–3 tags.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  7. Restricted Topics
                </h2>
              </div>
              <div className="p-6">
                <p className="font-medium text-gray-800">We do not cover:</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Animal products (e.g., "ethical meat")</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pseudoscience</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Alcohol/tobacco</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  8. Social Sharing
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  If published, share your post on your social channels (tag us
                  @TheVeganVibrance).
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  How to Submit
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6 text-gray-600">
                  <div>
                    <p className="mb-4">
                      Email your draft or pitch to{" "}
                      <a
                        href="mailto:theveganvibrance@gmail.com"
                        className="text-green-600 hover:underline font-medium"
                      >
                        theveganvibrance@gmail.com
                      </a>{" "}
                      with:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Subject line:</strong> "Guest Post: [Your
                          Topic]"
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Proposed headline + 2–3 key takeaways.</span>
                      </li>
                      <li className="flex items-start">
                        <PenSquare className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Author bio (50 words max) + backlink (if applicable).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <CalendarDays className="h-5 w-5 text-green-600 mr-2" />
                      Editorial Review:
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Manual review ( 2–3 days).</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Edits for clarity/SEO may be made.</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          No follow-ups – we’ll respond if it’s a fit.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong>We reserve the right to reject
                      submissions without explanation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WriteForUs;
