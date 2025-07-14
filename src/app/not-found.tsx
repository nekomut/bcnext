import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto p-2">
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          404 - ページが見つかりません
        </h1>
        <p className="text-gray-600 mb-6">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <Link 
          href="/" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}