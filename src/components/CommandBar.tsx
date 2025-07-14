
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Command, Send, Mic, Brain } from 'lucide-react';

const suggestedQueries = [
  "Why did refill rates fall in the West region?",
  "Show me alternative incentive structures",
  "What's the competitive threat level?",
  "Analyze payer sentiment trends",
  "Simulate digital strategy impact"
];

export function CommandBar() {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Simulate AI processing
      console.log('Processing query:', query);
      setQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6 z-50">
      <Card className="p-4 bg-card/95 backdrop-blur-sm border-primary/20 glow-blue">
        <div className="space-y-3">
          {/* Main Command Input */}
          <form onSubmit={handleSubmit} className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Command className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI Command</span>
            </div>
            <div className="flex-1 relative">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Ask AI anything... (e.g., /ask why refill rates fell)"
                className="bg-background/50 border-primary/30 focus:border-primary"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsListening(!isListening)}
              className={`${isListening ? 'bg-red-500/20 border-red-500' : 'border-primary/30'}`}
            >
              <Mic className={`w-4 h-4 ${isListening ? 'text-red-500' : 'text-primary'}`} />
            </Button>
            <Button type="submit" size="sm" disabled={!query.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>

          {/* Quick Suggestions */}
          {showSuggestions && (
            <div className="slide-in-up">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Suggested Queries</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedQueries.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs hover:bg-primary/10 hover:border-primary/50"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Active Processing Indicator */}
          {query && (
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>AI is ready to process your query...</span>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
