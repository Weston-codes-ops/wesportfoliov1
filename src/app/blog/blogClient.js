"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight, TrendingUp, BookOpen, Star, Calendar, Tag } from 'lucide-react';

export default function blogClient({posts}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Social', 'Tech', 'Business'];


  const getCategoryColor = (category) => {
    const colors = {
      Social: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 border-blue-200/50 dark:border-blue-800/50",
      Tech: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 border-purple-200/50 dark:border-purple-800/50",
      Business: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-700 border-green-200/50 dark:border-green-800/50"
    };
    return colors[category] || "bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary-foreground border-border/50";
  };

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const newArticles = filteredPosts.slice(0, 3);
  const resourcefulArticles = filteredPosts.filter(post => post.resourceful);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/8 to-accent/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-secondary/8 to-primary/8 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto px-8 py-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <BookOpen className="w-4 h-4" />
              Blog & Insights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mb-4 text-3xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
          >
            Thoughts & Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Exploring the intersection of technology, business, and human experience.
            Sharing insights on software development, digital strategy, and the future of work.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 py-4"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'border-2 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/5 text-foreground'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* New Articles Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-8"
      >
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h2>New Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newArticles.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all bg-card group cursor-pointer shadow-md hover:shadow-xl"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent"></div>
                <BookOpen className="w-12 h-12 text-primary/40 group-hover:scale-110 transition-transform relative z-10" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Resourceful Articles Section */}
      {resourcefulArticles.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-8"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/20">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">In-Depth Resources</h2>
              <p className="text-muted-foreground text-sm">Comprehensive guides and detailed insights</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {resourcefulArticles.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20"
              >
                {/* Featured badge */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex rounded-full bg-gradient-to-r from-accent/20 to-primary/20 px-2 py-1 text-xs font-medium uppercase tracking-[0.24em] text-accent border border-accent/20">
                      Resource
                    </span>
                  </div>
                )}

                {/* Image placeholder with gradient */}
                <div className="relative h-32 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-muted-foreground/20 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-xl text-xs font-medium border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs bg-secondary/30 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      Read full article
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}

      {/* Newsletter CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="relative rounded-2xl p-8 text-center bg-gradient-to-br from-card to-accent/5  overflow-hidden">
          {/* Decorative accents */}

          <div className="relative z-10">
            <h2 className="mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles on tech, business, and the future of work.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 border-2 border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}