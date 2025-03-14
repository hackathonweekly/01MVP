import Link from 'next/link';
import { Button } from './ui/Button';

export function FooterCTA() {
  return (
    <section className="w-full py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          准备好从 0 到 1 了吗？
        </h2>
        <p className="text-xl text-fd-muted-foreground mb-10">
          来周周黑客松，让想法落地！
        </p>
        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
          <Link href="/docs" className="text-white font-semibold">
            立即开始
          </Link>
        </Button>
      </div>
    </section>
  );
}
