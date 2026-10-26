import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard/index.js";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import CategoryItems from "@/sections/Categories/CategoryItem.js";

const Categories = () => {
  const sliderNavigationId = "categories-slider-navigation";

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      isActionHiddenOnMobile
      actions={(
        <SliderNavigation
          mode="tile"
          id={sliderNavigationId}
        />
      )}
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewPortOnMobileS
      >
        {CategoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories;