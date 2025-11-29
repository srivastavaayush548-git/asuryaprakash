import React, { useState, useMemo } from 'react';
import { myOpinionContent, opinionArticles, getArchives } from '../Data/myOpinion';
import OpinionArticle from '../Components/OpinionArticle';

const MyOpinion = () => {
  const [selectedArchive, setSelectedArchive] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const archives = getArchives();

  // Filter articles by archive
  const filteredArticles = useMemo(() => {
    if (!selectedArchive) return opinionArticles;

    return opinionArticles.filter(article => {
      const date = new Date(article.date);
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' });
      return `${month} ${year}` === selectedArchive;
    });
  }, [selectedArchive]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const handleArchiveClick = (archive) => {
    const archiveKey = `${archive.month} ${archive.year}`;
    setSelectedArchive(selectedArchive === archiveKey ? null : archiveKey);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen pt-12 md:pt-14 relative">
      {/* Background */}
      <div
        className="fixed inset-0 top-12 md:top-14 -z-10 bg-[#F3F3F3]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-6">
            {myOpinionContent.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Articles */}
            <div className="flex-1">
              {currentArticles.length > 0 ? (
                <>
                  {currentArticles.map((article) => (
                    <OpinionArticle key={article.id} article={article} />
                  ))}

                  {/* Pagination */}
                  {totalPages > 1 && currentPage < totalPages && (
                    <div className="text-center mt-8">
                      <button
                        onClick={handleNextPage}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                      >
                        NEXT
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-black text-center py-12">
                  <p>No articles found for the selected archive.</p>
                </div>
              )}
            </div>

            {/* Sidebar - Archives */}
            <aside className="lg:w-64 shrink-0">
              <div className="rounded-lg p-2 border-8 border-white bg-none shadow-sm">
                <h3 className="text-black text-xl font-bold mb-4 uppercase">ARCHIVES</h3>
                <div className="border-b border-gray-300 mb-4"></div>
                <div className="space-y-2">
                  {archives.map((archive, index) => {
                    const archiveKey = `${archive.month} ${archive.year}`;
                    const isSelected = selectedArchive === archiveKey;
                    return (
                      <div
                        key={index}
                        onClick={() => handleArchiveClick(archive)}
                        className={`cursor-pointer transition-colors duration-200 ${isSelected
                          ? 'text-blue-600 font-semibold'
                          : 'text-black hover:text-blue-600'
                          }`}
                      >
                        {archive.month} {archive.year} ({archive.count})
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOpinion;

